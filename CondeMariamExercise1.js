const courses = [{
    prefix: 'ITIS',
    id: 4166,
    title: 'Network based app development'
},
{
    prefix: 'ITIS',
    id: 4180,
    title: 'Mobile application development'
},
{
    prefix: 'ITCS',
    id: 4156,
    title: 'Intro to machine learning'
},
{
    prefix: 'ITCS',
    id: 3160,
    title: 'Database desgin'
}
];

//return a course that matches the id
function findById(id) {
    return courses.find(course => course.id === id);
}

//To do: implement save(course)
function save(course){
    //add course to the array
    courses.push(course);
}


//To do: implement findByPrefix(prefix)
function findByPrefix(prefix) {
    //return an array of course objects with the matching prefix
    return courses.filter(course => course.prefix === prefix);
}

//To do: implement updateById(id, course)
function updateById(id, course) {
    //update the course object in the array whose id matches the parameter.
     let index = courses.findIndex(course => course.id == id);
     //the function returns true if the operation is successful
     if (index != -1){
         courses[index] = course;
         return true;
     }
     //return false 
     return false;
 }


//To do: implement removeById(id)
function removeById(id){
    //remove the course object in the array whose id matches the parameter
 let index = courses.findIndex(course => course.id == id);
 
 if(index != -1){
    //the function returns true if the operation is successful
     courses.splice(index,1);
     return true;
 }
 // return false
 return false;
}

//To do: uncomment the following testing code when you are ready to test your functions

save({ prefix: 'ITIS', id: 3310, title: 'Software architecture & design' });
save({ prefix: 'ITIS', id: 4250, title: 'Computer forensics' });
save({ prefix: 'ITIS', id: 4420, title: 'Usable security and privacy' });
console.log(courses);
console.log(findById(4166));
console.log(findByPrefix('ITIS'));
console.log(removeById(4000));
console.log(updateById(4000));
console.log(updateById(4166, {
    prefix: 'ITIS',
    id: 4166,
    title: 'Network-based app development'
}, ));
console.log(removeById(4420));
console.log(courses);