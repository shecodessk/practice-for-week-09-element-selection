const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  console.log(document.querySelectorAll(".seed"));

  // 2. Get all seedless fruit elements
  // Your code here
  console.log(document.querySelectorAll(".seedless"));
  // 3. Get first seedless fruit element
  // Your code here
  console.log(document.querySelectorAll(".seedless")[0]);
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const bodyChildNodes = document.body.childNodes;
  const section = bodyChildNodes[5];
  const text = section.childNodes[3];
  const p = text.childNodes[1];
  console.log(p.childNodes[1]);

  // 5. Get all children of element "wrapper"
  // Your code here
  const bodyChildrenHtml = document.body.children;
  console.log(bodyChildrenHtml[2].children[1].children);

  // 6. Get all odd number list items in the list
  // Your code here

  console.log(document.querySelectorAll(".odd"));
  // 7. Get all even number list items in the list
  // Your code here
  //console.log(bodyChildrenHtml[2].children[2].children);
  const olElement = document.querySelector("ol");
  console.log(olElement.querySelectorAll("li:not(.odd)"));

  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here

  console.log(bodyChildrenHtml[3].children[1].children[0]);

  // 9. Get "Amazon" list element
  // Your code here
  console.log(document.querySelector(".shopping"));
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  console.log(document.querySelectorAll(".unicorn"));
};

window.onload = select;
