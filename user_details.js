function UserDetails() {
    var user = [
        {
            id: 1,
            name: "Amita",
            section: "Bio",
            avl: false
        },
        {
            id: 2,
            name: "Neha",
            section: "Chem",
            avl: true
        },
        {
            id: 3,
            name: "Seema",
            section: "MAth",
            avl: true
        }
    ];
    return user;
}
;
var storeDetails = UserDetails();
//to display the available user
function currentUser(data) {
    var currentUserDetails;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var d = data_1[_i];
        if (d.avl) {
            currentUserDetails = d.id + " " + d.name;
            break;
        }
        ;
    }
    ;
    // console.log(currentUserDetails);
    return currentUserDetails;
}
;
//to return the object of array
function displayUserDetails(data1) {
    var allDetails;
    for (var d in data1) {
        console.log(data1 + " ");
    }
    return allDetails;
}
displayUserDetails(storeDetails);
console.log("The available user is " + currentUser(storeDetails));
