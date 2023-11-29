// Task 1 ans
db.test
  .find({ age: { $gt: 30 } })
  .project({ name: 1, email: 1, age: 1 })
  .sort({ age: 1 });

//Task 2 -> Document to find favouirate color where it is Maroon or Blue
db.test
  .find({ favoutiteColor: { $in: ["Maroon", "Blue"] } })
  .project({ favoutiteColor: 1 });

//Task 3 -> Find all documents where the skills is an empty array. -> Done with size
db.test.find({ skills: { $size: 0 } }).project({ skills: 1 });

//Task 4 - Find documents where the person has skills in both "JavaScript" and "Java."
db.test.find({
  $and: [{ "skills.name": "JAVASCRIPT" }, { "skills.name": "JAVA" }],
});

//Task 5 -> Add a new skill to the skills array for the document with the email "aminextleveldeveloper@gmail.com" The skill is {"name": "Python", "level": "Beginner", "isLearning": true}.

db.test.updateOne(
  { email: "amccurry3@cnet.com" },
  {
    $push: {
      skills: {
        name: "Python",
        level: "Beginner",
        isLearning: true,
      },
    },
  }
);

// Task 6
db.test.updateMany(
  {},
  {
    $push: {
      languages: "Spanish",
    },
  }
);

// Task 7 -> Remove the skill with the name "Kotlin" from the skills array.

db.test.updateMany(
  { "skills.name": "KOTLIN" },
  {
    $pull: {
      skills: {
        name: "KOTLIN",
      },
    },
  }
);
