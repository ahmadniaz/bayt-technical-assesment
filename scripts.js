//Assignment #2:
//Q#1
function all(arr, allTrue) {
  const result = allTrue(arr);
  if (!result.some((val) => val === undefined)) {
    return true;
  }
  return false;
}

function allTrue(arr) {
  return arr.map((ele) => {
    if (ele < 7) {
      return true;
    }
  });
}

console.log(all([1, 2, 3, 4, 6], allTrue));

//Assignment #2:
//Q#2
function contains(obj, targetValue) {
  for (var key in obj) {
    if (obj[key] === targetValue) {
      return true;
    } else if (typeof obj[key] === "object") {
      if (contains(obj[key], targetValue)) {
        return true;
      }
    }
  }
  return false;
}
const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};
console.log(contains(nestedObject, "foo2"));

function toggleMobileMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("show");
}
