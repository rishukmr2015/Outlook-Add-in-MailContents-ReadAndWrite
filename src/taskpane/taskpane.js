




/*

 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document, Office */

Office.onReady((info) => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("run").onclick = run;
  }
});
let data = "Hi all, I am writing to inform you about the Python classes getting started for children next month. The goal of the course is to introduce coding in python for children in the most basic yet intuitive manner while also guiding them on an overall understanding of how computers work. Towards the end of the course, children will also learn the basics of programming on a RaspberryPi Pico - using micropython interfacing several sensors, LEDs and other electronic components.The classes will be taught by an experienced instructor with 28+ years of domain expertise. He has been delivering several training programs (also involved with corporate training with companies like cisco, qualcomm etc) and conducting open-house training workshops primarily on technologies and topics related to Python, Linux System Programming and Linux Kernel Development, various programming languages, free/open source software developer tools and frameworks.";
export async function run() {
  // Get a reference to the current message
  let item;
  item = Office.context.mailbox.item;
  // reading the contents from the email body
  Office.context.mailbox.item.body.getAsync(
    "text",
    { asyncContext: "This is passed to the callback" },
    function callback(result) {
        // Do something with the result.
        document.getElementById("item-subject").innerText = result.value;
        let ques = result.value;

    });

  // adding the contents to the email body
  item.body.setSelectedDataAsync(
    data,
    { coercionType: Office.CoercionType.Html, 
    asyncContext: { var3: 1, var4: 2 } },
    function (asyncResult) {
        if (asyncResult.status == 
            Office.AsyncResultStatus.Failed){
            write(asyncResult.error.message);
        }
        else {
            // Successfully set data in item body.
            // Do whatever appropriate for your scenario,
            // using the arguments var3 and var4 as applicable.
        }
    });
  document.getElementById("item-subject").innerText = item.body.getAsync;
}



