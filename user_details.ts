enum UserLocation{'ind','aus','usa'};
function UserDetails()
{
var user=
[
    {
        id:1,
        name:"Amita",
        section:"Bio",
        location:UserLocation.ind,
        avl:false
    },
    {
        id:2,
        name:"Neha",
        section:"Chem",
        location:UserLocation.aus,
        avl:true
    },
    {
        id:3,
        name:"Seema",
        section:"MAth",
        location:UserLocation.usa,
        avl:true
    }
];   
return user;
};


var storeDetails = UserDetails();
//to display the available user
function currentUser(data):string
{
    let currentUserDetails:string;
    for(let d of data){
        if(d.avl)
        {
           currentUserDetails = d.id +" " +d.name; 
            break;
        };
    };
   // console.log(currentUserDetails);
    return currentUserDetails;
};

//to return the object of array

console.log("The available user is "+currentUser(storeDetails));