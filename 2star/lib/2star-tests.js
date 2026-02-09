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
            if (typeof expected[i] === "object") {
                if (JSON.stringify(expected[i]) !== JSON.stringify(actual[i])) {
                    return false;
                }
            }
            else if (expected[i] !== actual[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

function testGridOfStrings() {
    if (window.hasOwnProperty("gridOfStrings")) {
        // returns [["Hi", "Hi"], ["Hi", "Hi"], ["Hi", "Hi"]]
        // gridOfStrings(3, 2, "Hi");
        const grid1 = gridOfStrings(3, 2, "Hi");
        const expected1 = [["Hi", "Hi"], ["Hi", "Hi"], ["Hi", "Hi"]];
        if (arrayEquals(expected1, grid1)) {
            TestResults.addPass(`<code>gridOfStrings(3, 2, "Hi")</code> returns <code>[["Hi", "Hi"], ["Hi", "Hi"], ["Hi", "Hi"]]</code>.`);
        } else {
            TestResults.addFail(`<code>gridOfStrings(3, 2, "Hi")</code> returns <code>${JSON.stringify(grid1)}</code>. <code>${JSON.stringify(expected1)}</code> was expected.`)
        }
        const grid2 = gridOfStrings(2, 0, "!");
        const expected2 = [[], []];
        if (arrayEquals(expected2, grid2)) {
            TestResults.addPass(`<code>gridOfStrings(2, 0, "!")</code> returns <code>[[], []]]</code>.`);
        } else {
            TestResults.addFail(`<code>gridOfStrings(2, 0, "!")</code> returns <code>${JSON.stringify(grid2)}</code>. <code>${JSON.stringify(expected2)}</code> was expected.`)
        }
        const grid3 = gridOfStrings(3, 1, "!");
        const expected3 = [["!"], ["!"], ["!"]];
        if (arrayEquals(expected3, grid3)) {
            TestResults.addPass(`<code>gridOfStrings(3, 1, "!")</code> returns <code>${JSON.stringify(grid3)}</code>.`);
        } else {
            TestResults.addFail(`<code>gridOfStrings(3, 1, "!")</code> returns <code>${JSON.stringify(grid3)}</code>. <code>${JSON.stringify(expected2)}</code> was expected.`)
        }
    } else {
        TestResults.addWarning("<code>gridOfStrings()</code> has not been implemented so it can't be tested.");
    }
}


function testSumInner() {
    if (window.hasOwnProperty("sumInner")) {
        /*
        * // returns [4, 7, 11]
        * sumInner([1, 3], [3, 4], [5, 6])
        */
        const totals1 = sumInner([[1, 3], [3, 4], [5, 6]]);
        const expected1 = [4, 7, 11];
        if (arrayEquals(expected1, totals1)) {
            TestResults.addPass(`<code>sumInner([[1, 3], [3, 4], [5, 6]])</code> returns <code>${JSON.stringify(expected1)}</code>.`);
        } else {
            TestResults.addFail(`<code>sumInner([[1, 3], [3, 4], [5, 6]])</code> returns <code>${JSON.stringify(totals1)}</code>. <code>${JSON.stringify(expected1)}</code> was expected.`)
        }
        const totals2 = sumInner([[], []]);
        const expected2 = [0, 0];
        if (arrayEquals(expected2, totals2)) {
            TestResults.addPass(`<code>sumInner([[], []])</code> returns <code>${JSON.stringify(expected2)}</code>.`);
        } else {
            TestResults.addFail(`<code>sumInner([[], []])</code> returns <code>${JSON.stringify(totals2)}</code>. <code>${JSON.stringify(expected2)}</code> was expected.`)
        }
    } else {
        TestResults.addWarning("<code>sumInner()</code> has not been implemented so it can't be tested.");
    }
}

function testSumAll() {
    if (window.hasOwnProperty("sumAll")) {
        // returns 22
        const total1 = sumAll([[1, 3], [3, 4], [5, 6]]);
        if (total1 === 22) {
            TestResults.addPass(`<code>sumAll([1, 3], [3, 4], [5, 6])</code> returns <code>22</code>.`);
        } else {
            TestResults.addFail(`<code>sumAll([1, 3], [3, 4], [5, 6])</code> returns <code>${total1}</code>. <code>22</code> was expected.`)
        }
        const total2 = sumAll([[1, 3, 2], [3, 8, 6]]);
        if (total2 === 23) {
            TestResults.addPass(`<code>sumAll([[1, 3, 2], [3, 8, 6]])</code> returns <code>23</code>.`);
        } else {
            TestResults.addFail(`<code>sumAll([[1, 3, 2], [3, 8, 6]])</code> returns <code>${total2}</code>. <code>23</code> was expected.`)
        }
        
    } else {
        TestResults.addWarning("<code>sumAll()</code> has not been implemented so it can't be tested.");
    }
}


function testFlip() {
    if (window.hasOwnProperty("flip")) {
        // returns [[7, 8, 9], [4, 5, 6], [1, 2, 3]]
        const flipped1 = flip([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
        const expected1 = [[7, 8, 9], [4, 5, 6], [1, 2, 3]];
        if (arrayEquals(expected1, flipped1)) {
            TestResults.addPass(`<code>flip([[1, 2, 3], [4, 5, 6], [7, 8, 9]])</code> returns <code>${JSON.stringify(expected1)}</code>.`);
        } else {
            TestResults.addFail(`<code>flip([[1, 2, 3], [4, 5, 6], [7, 8, 9]])</code> returns <code>${JSON.stringify(flipped1)}</code>. <code>${JSON.stringify(expected1)}</code> was expected.`)
        }
        const flipped2 = flip([[1, 2]]);
        const expected2 = [[1, 2]];
        if (arrayEquals(expected2, flipped2)) {
            TestResults.addPass(`<code>flip([[1, 2]])</code> returns <code>${JSON.stringify(expected2)}</code>.`);
        } else {
            TestResults.addFail(`<code>flip([[1, 2]])</code> returns <code>${JSON.stringify(flipped2)}</code>. <code>${JSON.stringify(expected2)}</code> was expected.`)
        }
    } else {
        TestResults.addWarning("<code>flip()</code> has not been implemented so it can't be tested.");
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
    
    testGridOfStrings();
    testSumAll();
    testSumInner();
    testFlip();
    
    // This statement should be last - displays the messages added above
    TestResults.display(resultsDiv);
}

// Calls waitForP5() every half second until p5.js finishes loading
const loadTimer = setInterval(waitForP5, 500);
