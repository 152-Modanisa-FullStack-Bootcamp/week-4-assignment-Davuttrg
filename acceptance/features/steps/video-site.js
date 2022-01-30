const { Given, When, Then } = require('cucumber')
const openUrl = require('../support/action/openUrl')
const checkElementExists = require('../support/check/checkElementExists')
const checkUrlContains = require('../support/check/checkUrlContains')

const assert = require('assert');

Given("that User goes to Video Site Project's HomePage", async function () {
    await openUrl.call(this, 'http://localhost:8080/')
})
When("page is loaded", async function () {
    await checkElementExists.call(this, '#home-content', false)
})

Then("User can see some of videos' title like", async function (title) {
    const willTestTitles = title.rawTable;
    const videoList = await this.page.$$eval('.card #title', titles => titles.map((title) => title.textContent));
    willTestTitles.forEach((testTitle) => {
        if (!videoList.some((videoTitle) => videoTitle.includes(testTitle[0]))) throw new Error("not exist title")
    });
})

// ---- 

Given("that User is on Video Site Project's HomePage", async function () {
    await openUrl.call(this, 'http://localhost:8080/')
})

When('User clicks {string} video', async function (videoTitle) {

    this.videoId = await this.page.$$eval('.card', async (titles, videoTitle) => {
        const video = titles.find(item => item.querySelector('#title').textContent.includes(videoTitle));
        if (!video) throw new Error("not exist video with this title")
        const willClickImage = video.querySelector('img');
        await willClickImage.click();
        const videoDataId = video.getAttribute('data-id')
        return videoDataId
    }, videoTitle)
});
Then("User should see watch url correctly", async function () {
    await this.page.waitForSelector('#query-id')
    await checkUrlContains.call(this, false, `/watch?videoId=${this.videoId}`)
})

When('User hovers {string} video', async function (videoTitle) {
    this.classes = await this.page.$$eval('.card', async (titles, videoTitle) => {
        const video = titles.find(item => item.querySelector('#title').textContent.includes(videoTitle));
        if (!video) throw new Error("not exist video with this title")
        let image = video.querySelector('img');
        const beforeHover = {
            classname: image.getAttribute('class'),
            src: image.getAttribute('src')
        }
        const event = new Event('mouseover');
        await image.dispatchEvent(event)
        const afterHover = {
            classname: image.classList.value,
            src: image.getAttribute('src')
        }
        return { beforeHover, afterHover, }
    }, videoTitle);
    assert.equal(this.classes.beforeHover.classname, "")
    assert.equal(this.classes.afterHover.classname, "hovered")

});

Then('User should see hovered image', function () {
    assert.notEqual(this.classes.beforeHover.src, this.classes.afterHover.src);
    console.log("this.classes.afterHover.src :", this.classes.afterHover.src)
    if (!this.classes.afterHover.src.includes('hover')) assert.fail("hover image not showed")
});