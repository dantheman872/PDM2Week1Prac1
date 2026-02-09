import { TestResults, canvasStatus, substituteDraw } from "../../testing/test-utils.js";

/**
 * A hacky way to wait for p5js to load the canvas. Include in all exercise test files.
 */
function waitForP5() {
    const canvases = document.getElementsByTagName("canvas");
    if (canvases.length > 0) { // p5.js has loaded i.e. drawn a canvas
        clearInterval(loadTimer); // Stop the timer
        runTests(canvases[0]); // Run the tests below
    }
}

//#region Test functions for this exercise only
/**
 * Checks if two arrays are equal.
 * @param {any[]} expected The expected array
 * @param {any[]} actual The actual array
 * @returns {boolean} True if the arrays are the same length and have the same values in the same order. False otherwise.
 */
function arrayEquals(expected, actual) {
    if (typeof expected === typeof actual && expected.length === actual.length) {
        for (let i = 0; i < actual.length; i++) {
            if (expected[i] !== actual[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

function testFillArray() {
    // Check that the fillArray function has been implemented.
    if (window.hasOwnProperty("fillArray")) {
        // 0 returns empty array
        const fill0 = fillArray(0);
        if (arrayEquals([], fill0)) {
            TestResults.addPass("<code>fillArray(0)</code> returns an empty array (<code>[]</code>).");
        } else {
            TestResults.addFail(`<code>fillArray(0)</code> returns ${fill0}. An empty array ([]) was expected.`)
        }
        // 2 returns [0, 1];
        const fill2 = fillArray(2);
        if (arrayEquals([0, 1], fill2)) {
            TestResults.addPass("<code>fillArray(2)</code> returns an <code>[0, 1]</code>.");
        } else {
            TestResults.addFail(`<code>fillArray(2)</code> returns ${fill2}. <code>[0, 1]</code> was expected.`)
        }
        // 5 returns [0, 1, 2, 3, 4]
        const fill5 = fillArray(5);
        if (arrayEquals([0, 1, 2, 3, 4], fill5)) {
            TestResults.addPass("<code>fillArray(5)</code> returns an <code>[0, 1, 2, 3, 4]</code>.");
        } else {
            TestResults.addFail(`<code>fillArray(5)</code> returns ${fill5}. <code>[0, 1, 2, 3, 4]</code> was expected.`)
        }
    } else {
        TestResults.addWarning("<code>fillArray()</code> has not been implemented so it can't be tested.");
    }
}

function testSearch() {
    if (window.hasOwnProperty("search")) {
        const search1 = search(["a", "b", "c"], 5);
        if (search1 === false) {
            TestResults.addPass(`<code>search(["a", "b", "c"], 5)</code> returns <code>false</code>.`);
        } else {
            TestResults.addFail(`<code>search(["a", "b", "c"], 5)</code> returns <code>${search1}</code>. Expected <code>false</code>.`);
        }
        const search2 = search(["a", "b", "c"], "c");
        if (search2) {
            TestResults.addPass(`<code>search(["a", "b", "c"], "c")</code> returns <code>true</code>.`);
        } else {
            TestResults.addFail(`<code>search(["a", "b", "c"], "c")</code> returns <code>${search2}</code>. Expected <code>true</code>.`);
        }
        const search3 = search([5, -1, 9], 5);
        if (search3) {
            TestResults.addPass(`<code>search([5, -1, 9], 5)</code> returns <code>true</code>.`);
        } else {
            TestResults.addFail(`<code>search([5, -1, 9], 5)</code> returns <code>${search3}</code>. Expected <code>true</code>.`);
        }
    } else {
        TestResults.addWarning("<code>search()</code> has not been implemented so it can't be tested.");
    }
}

function testCount() {
    if (window.hasOwnProperty("count")) {
        const count1 = count([0, 25, 3, 4, 3], 3);
        if (count1 === 2) {
            TestResults.addPass(`<code>count([0, 25, 3, 4, 3], 3)</code> returns <code>2</code>.`);
        } else {
            TestResults.addFail(`<code>count([0, 25, 3, 4, 3], 3)</code> returns <code>${count1}</code>. Expected <code>2</code>.`);
        }
        const count2 = count([0, 25, 3, 4, 3], 7);
        if (count2 === 0) {
            TestResults.addPass(`<code>count([0, 25, 3, 4, 3], 7)</code> returns <code>0</code>.`);
        } else {
            TestResults.addFail(`<code>count([0, 25, 3, 4, 3], 7)</code> returns <code>${count1}</code>. Expected <code>0</code>.`);
        }
    } else {
        TestResults.addWarning("<code>count()</code> has not been implemented so it can't be tested.");
    }
}

function testTotal() {
    if (window.hasOwnProperty("total")) {
        const total1 = total([1, 2, 3]);
        if (total1 === 6) {
            TestResults.addPass(`<code>total([1, 2, 3])</code> returns <code>6</code>.`);
        } else {
            TestResults.addFail(`<code>total([1, 2, 3])</code> returns <code>${total1}</code>. Expected <code>6</code>.`);
        }
        const total2 = total([]);
        if (total2 === 0) {
            TestResults.addPass(`<code>total([])</code> returns <code>0</code>.`);
        } else {
            TestResults.addFail(`<code>total([])</code> returns <code>${total2}</code>. Expected <code>0</code>.`);
        }
    } else {
        TestResults.addWarning("<code>total()</code> has not been implemented so it can't be tested.");
    }
}

function testRepeat() {
    if (window.hasOwnProperty("repeat")) {
        const repeat1 = repeat([1, 2, 3], 2);
        if (arrayEquals([1, 2, 3, 1, 2, 3], repeat1)) {
            TestResults.addPass(`<code>repeat([1, 2, 3], 2)</code> returns <code>[1, 2, 3, 1, 2, 3]</code>.`);
        } else {
            TestResults.addFail(`<code>repeat([1, 2, 3], 2)</code> returns <code>${repeat1}</code>. Expected <code>[1, 2, 3, 1, 2, 3]</code>.`);
        }
        const repeat2 = repeat([4], 3);
        if (arrayEquals([4, 4, 4], repeat2)) {
            TestResults.addPass(`<code>repeat([4], 3)</code> returns <code>[4, 4, 4]</code>.`);
        } else {
            TestResults.addFail(`<code>repeat([4], 3)</code> returns <code>${repeat2}</code>. Expected <code>[4, 4, 4]</code>.`);
        }
    } else {
        TestResults.addWarning("<code>repeat()</code> has not been implemented so it can't be tested.");
    }
}

//#endregion

/**
 * Run all tests.
 * @param {HTMLElement} canvas The HTML canvas created by p5.js
 */
async function runTests(canvas) {
    // SETUP - don't edit
    canvas.style.pointerEvents = "none"; // prevents p5.js from responding to mouse events independent of the tests
    substituteDraw(); 
    const resultsDiv = document.getElementById("results");
    for (const e of canvasStatus.errors) {
        TestResults.addFail(`In frame ${frameCount}, ${e}`);
    }
    // END SETUP

    // These exercises have no output so hiding the canvas.
    canvas.style.display = "none";
    // YOUR TESTS HERE. Write unit test functions and use TestResults static methods to show test results e.g.:
    
    testFillArray();
    testSearch();
    testTotal();
    testCount();
    testRepeat();
    
    // This statement should be last - displays the messages added above
    TestResults.display(resultsDiv);
}

// Calls waitForP5() every half second until p5.js finishes loading
const loadTimer = setInterval(waitForP5, 500);
