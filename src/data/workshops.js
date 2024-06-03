const topicData = {
  categoryName: "Category 01",
  categoryData: [
    {
      id: 0,
      workshopName: "Lorem ipsum",
      workshopDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      workshopShortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      workshopImage: "https://picsum.photos/id/237/300/200",
    },
    {
      id: 1,
      workshopName: "Lorem ipsum",
      workshopDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      workshopShortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      workshopImage: "https://picsum.photos/id/237/300/200",
    },
    {
      id: 2,
      workshopName: "Lorem ipsum",
      workshopDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      workshopShortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      workshopImage: "https://picsum.photos/id/237/300/200",
    },
    {
      id: 3,
      workshopName: "Lorem ipsum",
      workshopDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      workshopShortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      workshopImage: "https://picsum.photos/id/237/300/200",
    },
    {
      id: 4,
      workshopName: "Lorem ipsum",
      workshopDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      workshopShortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      workshopImage: "https://picsum.photos/id/237/300/200",
    },
  ],
};

export default topicData;




// // Find the index of the object with id 3
// const indexToUpdate = topicData.categoryData.findIndex(item => item.id === 3);

// // If indexToUpdate is not -1 (meaning it was found)
// if (indexToUpdate !== -1) {
//   // Update the object at that index
//   topicData.categoryData[indexToUpdate] = {
//     ...topicData.categoryData[indexToUpdate], // Preserve other properties
//     // Update properties as needed
//     workshopName: "Updated Name",
//     workshopDescription: "Updated Description",
//     workshopShortDescription: "Updated Short Description",
//     workshopImage: "https://example.com/updated-image.jpg",
//   };

//   // Now topicData has been updated
//   console.log(topicData);
// } else {
//   console.log("Object with id 3 not found in the array.");
// }