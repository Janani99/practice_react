import React, { useState, useRef } from 'react'

export default function Example() {
    const [data, setData] = useState([]);
 const [newPost,setNewPost]=useState('')

    const getFetch = () => {
        fetch('https://api.jsonbin.io/v3/b/67374026ad19ca34f8ca8b6e', {
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": "$2a$10$zkh8bWHI.R1l1jqXc.Gl2u4UFOwSHuUTN5d4u4ZSAOu7wEsf9Pj1e"
            }
        }).then((res) => res.json()).then((resp) => setData(...[...data,resp.record.posts]))
         
    }
    const removeDuplicateText = (str) => {
        const text = str.split(" ");
        const set1 = new Set(text);
        console.log("removeDuplicate", [...set1].join(' '))
        return [...set1].join(' ');

    }
    const longestWord = (str) => {
        const text = str.split(" ");
        const sort = text.sort((a, b) => {
            return b.length - a.length;
        }
        )
        console.log("longest word", sort[0]);
        return sort[0];
    }
    const articleCount = (strng) => {
    let articleCount=0;
    let prepositionCount = 0;
    const text = strng.split(" ");
    for (let i = 0; i <= text.length; i++) {
        console.log("articlecount",text)
        if (text[i]=='a'|| text[i]=='an'|| text[i]=='the'){
            console.log("articlecount-----",text)

              articleCount++;

        }
        if (text[i]==='in'||text[i]==='at'||text[i]==='on'||text[i]==='of'||text[i]==='to'||text[i]==='by') {
            prepositionCount++;

      }
    }
    return {articleCount,prepositionCount}

}

const addPost=(e)=>{
   console.log("addPostaddPost",newPost);
     setData([...data,{text:newPost}]);
     setNewPost('')
  
 
}
const handle=(e)=>{
    console.log("et",e)
    setNewPost(e.target.value);
    e.preventDefault()

    
}
    console.log("data", data)
    return (
        <div>
            <button onClick={getFetch}>Get Latest Posts</button>
            <ul>
                {
                    data?.map((item, index) => {
                        return (
                            <>
                                <li key={index}>{item.text}
                                    <p> {removeDuplicateText(item.text)}</p>
                                    <p>LONGEST WORD  {`${longestWord(item.text)}`}</p>
                                    <p>ARticleCount {`${articleCount(item.text).articleCount}`}</p>
                                    <p>prepositionCount {`${articleCount(item.text).prepositionCount}`}</p>



                                </li>
                            </>
                        )
                    })
                }
            </ul>
            {/* <form> */}
            <input type='text'onChange={(e)=>handle(e)} value={newPost}/>
            <button onClick={addPost}>ADD</button>
            {/* </form>           */}
</div>
    )
}
