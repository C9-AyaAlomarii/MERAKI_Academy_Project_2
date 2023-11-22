const courses = [
    {
      id: 1,
      department: "IT",
  Name: "jQuery for Beginners ",
      goals: ["goal1", "goal2", "goal3", "goal4", "goal5"],
      imageSrc: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=900&t=st=1700502277~exp=1700502877~hmac=07b2f74aace77245d2df2ae02affc2a221eadad0ef5f4ceaf87332f5aa3c1eff",
  
      description: "Mastering jQuery: Simplifying Web Development for Beginners.",
      detailedDescription:`This jQuery Tutorial for beginners will help you get jQuery on your page and get up-to-speed with how to use basic jQuery commands.
      What is jQuery? As you'll see in this tutorial, even beginners to javascript can write jQuery within minutes. It's also the most universally used javascript library in the world at present, so odds are your next employer will be using it.`,
      rate: 7,
      lessons:[
        {
              id:1,
              Name: "lesson 1",
             
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos, earum laboriosam quia recusandae aperiam vel molestias illum quasi saepe vero odio, consequuntur minima excepturi nesciunt atque. Ipsum.",
              videosSrc: "url/path",
      } ,{
        id:2,
        Name: "lesson 2",
       
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos, earum laboriosam quia recusandae aperiam vel molestias illum quasi saepe vero odio, consequuntur minima excepturi nesciunt atque. Ipsum.",
        videosSrc: "https://www.youtube.com/embed/hMxGhHNOkCU?si=_o7xAx0C2BZgEiIx",
},{
  id:3,
  Name: "lesson 3",
 
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos, earum laboriosam quia recusandae aperiam vel molestias illum quasi saepe vero odio, consequuntur minima excepturi nesciunt atque. Ipsum.",
  videosSrc: "url/path",
}  ],
    },
  
    {
        id: 2,
        department: "some name",
    Name: "name2",
        goals: ["goal1", "goal2", "goal3", "goal4", "goal5"],
        imageSrc: "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-97395.jpg?w=900&t=st=1700502340~exp=1700502940~hmac=401563a0ba61e48375ca08328ced36d4c6cede23a92615744bb5e975b5fd7779",
    videosSrc: "url/path",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos,",
    detailedDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos, earum laboriosam quia recusandae aperiam vel molestias illum quasi saepe vero odio, consequuntur minima excepturi nesciunt atque. Ipsum",
        rate: 7,
        lessons:[
          {
                id:1,
                Name: "lesson 1",
               
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos, earum laboriosam quia recusandae aperiam vel molestias illum quasi saepe vero odio, consequuntur minima excepturi nesciunt atque. Ipsum.",
                videosSrc: "url/path",
        } ,{
          id:2,
          Name: "lesson 2",
         
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos, earum laboriosam quia recusandae aperiam vel molestias illum quasi saepe vero odio, consequuntur minima excepturi nesciunt atque. Ipsum.",
          videosSrc: "https://www.youtube.com/embed/hMxGhHNOkCU?si=_o7xAx0C2BZgEiIx",
  },{
    id:3,
    Name: "lesson 3",
   
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos, earum laboriosam quia recusandae aperiam vel molestias illum quasi saepe vero odio, consequuntur minima excepturi nesciunt atque. Ipsum.",
    videosSrc: "url/path",
  }  ]
      }, {
        id: 3,
        department: "some name",
    Name: "name2",
        goals: ["goal1", "goal2", "goal3", "goal4", "goal5"],
        imageSrc: "https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg?w=996&t=st=1700592621~exp=1700593221~hmac=76eec6c0bd1211f451e0c5dc69c283c77fd5fce45efdc7481c5418fd7c9f2585",
    videosSrc: "url/path",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos,",
    detailedDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos, earum laboriosam quia recusandae aperiam vel molestias illum quasi saepe vero odio, consequuntur minima excepturi nesciunt atque. Ipsum",
        rate: 7,
        lessons:[
          {
                id:1,
                Name: "lesson 1",
               
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos, earum laboriosam quia recusandae aperiam vel molestias illum quasi saepe vero odio, consequuntur minima excepturi nesciunt atque. Ipsum.",
                videosSrc: "url/path",
        } ,{
          id:2,
          Name: "lesson 2",
         
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos, earum laboriosam quia recusandae aperiam vel molestias illum quasi saepe vero odio, consequuntur minima excepturi nesciunt atque. Ipsum.",
          videosSrc: "https://www.youtube.com/embed/hMxGhHNOkCU?si=_o7xAx0C2BZgEiIx",
  },{
    id:3,
    Name: "lesson 3",
   
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos, earum laboriosam quia recusandae aperiam vel molestias illum quasi saepe vero odio, consequuntur minima excepturi nesciunt atque. Ipsum.",
    videosSrc: "url/path",
  }  ],
      }
    
    // {},...
  ];
  // for the `imageSrc` it can use an array of url/path
const mainDiv = $("#main")
/*  const boxDiv = $(`<div id="box-div"></div>`)
boxDiv.appendTo(mainDiv)  */

/* boxDiv.css({
  
  "display": "grid",
  'grid-template-columns': " 1fr 1fr 1fr",
  "grid-template-rows":"100%  ",
 " grid-template-areas":"c1r1 c2r1 c2r1 "

});  */
const mainPageDiv = $("#main-page")

const detailedPage = $("#detailed-page")
const lessonPage=$("#lesson-page")
lessonPage.hide()
detailedPage.hide()
  courses.forEach((ele,i)=>{
    console.log(i);
    const renderDiv = $(`<div id="render-div${i}"></div>`)
    const img = $(`<img src=${ele.imageSrc} alt="" >`)
    
        const Name = $(`  <h3 id="name">${ele.Name}</h3>`)
        const department = $(`<p id="department">${ele.department}</p>`)
    const description = $(`<p id="description">${ele.description}</p>`)
    
     
        renderDiv.appendTo(mainDiv)

        img.appendTo(renderDiv)
        Name.appendTo(renderDiv)
        department.appendTo(renderDiv)
    description.appendTo(renderDiv)
    renderDiv.css({
      "padding": "5px",
     })
         img.css({
            "height": "50%",
            "width": "90%",
            "padding": "5px",
            "margin":"10px",
            "border-radius": "25px",
          }); 
          Name.css({
            
            "padding": "5px",
            "margin":"5px"
          }); 
          description.css({
            "text-align": "justify",
 " text-justify": "inter-word",
            "padding": "5px",
            "margin":"5px"
          }); 

          department.css({
            "padding": "5px",
            "margin":"10px",
           })
          renderDiv.on("click",()=>{
            
            mainDiv.hide()
            detailedPage.show()
           
            const detailedDescription =$("#description-2")
            detailedDescription.text(ele.detailedDescription)
            const goals =$("#goals-2")
            const goalsList=$(`<ul></ul>`)
            goalsList.appendTo(goals)
              ele.goals.forEach((elem2,i1)=>{
                const goalsListItems=$(`<li>${elem2}</li>`)
                goalsListItems.appendTo(goalsList)

              })
              ele.lessons.forEach((ele3,i)=>{
                const lessonsDiv=$("#lessons")
                const lessonsItems=$(`<h3>${ele3.Name}</h3>`)
                    lessonsItems.appendTo(lessonsDiv)
                    lessonsItems.on("click",()=>{
                      detailedPage.hide()
                      lessonPage.show()
                    })
              })
          })

  })

