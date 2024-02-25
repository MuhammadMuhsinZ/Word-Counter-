import inquirer from 'inquirer'

function counter(Paragraph:string){
    let freewhitespace = Paragraph.replace(/\s/g,"")
    return freewhitespace.length

}

async function startwordcount(counter:(text: string)=>number){
    do{ 
    let response = await inquirer.prompt([
        {
        type:`input`,
        name:"Paragraph",
        message:"Please type your Paragraph / text"
    },
    {
        type:`confirm`,
        name:"confirmation",
        message:"Do you want to count another word?",
        default:[true, false]
    }
    
])
    console.log(counter(response.Paragraph))
    if(response.confirmation === true){
        
    }
    
    if(response.confirmation === false){
        console.log("your word counter is complete")
    }
    if (response.confirmation === false){
        break
    }
}
    while(true)
}   
startwordcount(counter)
