// Question 1 -> -Retrieve the count of individuals who are active (isActive: true) for each gender.

db.getCollection("massive-data ").aggregate([  
    {
        $match: {
            isActive:true
        }
    },
    {
        $group: { 
            _id: "$gender" ,
            count: {$sum : 1}
        }
    }
])

// Question 2 ->  Retrieve the names and email addresses of individuals who are active (`isActive: true`) and have a favorite fruit of "banana."
db.getCollection("massive-data ").aggregate([
        
    {
        $match: {
            isActive:true,
            favoriteFruit: "banana"
        }
    },
    {
        $group: { 
            _id: "null" ,
            name : {$push : "$name"},
            email : {$push : "$email"}
            
        }
    }
])

// db.getCollection("massive-data ").find();


// Question 3 -> Find the average age of individuals for each favorite fruit, then sort the results in descending order of average age.

db.getCollection("massive-data ").aggregate([
        
    {
        $group: { 
            _id: "favoriteFruit" ,
            age : {$avg : "$age"}
            
        }
    },
    
    //sort 
    {
        $sort  : {
            age : -1
        }
    }
])

// Question 4: - Retrieve a list of unique friend names for individuals who have at least one friend, and include only the friends with names starting with the letter "W."
db.getCollection("massive-data ").aggregate([
    {
      $match: {
        friends: { $exists: true, $ne: [] }  // Filter for individuals with at least one friend
      }
    },
    {
      $unwind: "$friends"  // Split the friends array into separate documents
    },
    {
      $match: {
        "friends.name": /^W/  // Filter for friends with names starting with "W"
      }
    },
    {
      $group: {
        _id: "$friends.name"  // Group by friend name to get unique names
      }
    }
  ]);


// - Use $facet to separate individuals into two facets based on their age: those below 30 and those above 30. Then, within each facet, bucket the individuals into age ranges (e.g., 20-25, 26-30, etc.) and sort them by name within each bucket.
  
db.getCollection("massive-data ").aggregate([
    {
      $facet: {
        "below30": [
          {
            $match: {
              age: { $lt: 30 }  // Individuals below 30
            }
          },
          {
            $bucket: {
              groupBy: "$age",
              boundaries: [20, 25, 30],
              default: "Other",
              output: {
                names: { $push: "$name" },
                count: { $sum: 1 }
              }
            }
          },
          {
            $sort: {
              "_id": 1  // Sort by age range
            }
          }
        ],
        "above30": [
          {
            $match: {
              age: { $gte: 30 }  // Individuals above or equal to 30
            }
          },
          {
            $bucket: {
              groupBy: "$age",
              boundaries: [30, 35, 40],
              default: "Other",
              output: {
                names: { $push: "$name" },
                count: { $sum: 1 }
              }
            }
          },
          {
            $sort: {
              "_id": 1  // Sort by age range
            }
          }
        ]
      }
    }
  ]);
  

// 6 ->- Calculate the total balance of individuals for each company and display the company name along with the total balance. Limit the result to show only the top two companies with the highest total balance.

db.getCollection("massive-data ").aggregate([
    {
        $group: { _id: "$company" , totalBalance : {$sum : "$balance"}}
    },
    {
        $sort  : {
            totalBalance : -1
        }
    }, 
    {
        $limit : 2
    }
])

