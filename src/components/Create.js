import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = (props)=>{

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Vikas');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit=(e) =>{
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers : { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log("new blog added!!")
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })

        
    }
    return(
        <div className={`create mt-30 p-20 text-${props.mode=== 'light' ? 'dark' : 'light'}`}>
            <h1>text</h1>
            
            <div className="container">
            <h1></h1>
            <p></p>
            <section></section>
            </div>
            <p className={` text-${props.mode=== 'light' ? 'dark' : 'light'}`}>Some Blog</p>
            <form onSubmit={handleSubmit} className={`border border-secondary shadow-lg rounded p-2 bg-${props.mode} text-${props.mode=== 'light' ? 'dark' : 'light'}`}>
                <label className={`text-${props.mode=== 'light' ? 'dark' : 'light'}`}>Blog Title:</label>
                <input
                    type="text"
                    required   
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    className={`shadow-lg border border-secondory rounded bg-${props.mode} text-${props.mode=== 'light' ? 'dark' : 'light'}`}
                ></input>
                <textarea
                    required
                    value={body} 
                    rows="8"
                    onChange={(e) => setBody(e.target.value)}
                    className={`shadow-lg rounded bg-${props.mode} text-${props.mode=== 'light' ? 'dark' : 'light'}`}
                ></textarea>
                <label className={`bg-${props.mode} text-${props.mode=== 'light' ? 'dark' : 'light'}`}>Blog Author:</label>
                <select
                    className={`shadow-lg bg-${props.mode} text-${props.mode=== 'light' ? 'dark' : 'light'}`}
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option className={`bg-${props.mode} text-${props.mode=== 'light' ? 'dark' : 'light'}`} value="Vikas">Vikas</option>
                    <option  className={`bg-${props.mode} text-${props.mode=== 'light' ? 'dark' : 'light'}`} value="Saavika">Saavika</option>
                </select>
                {!isPending && <button className={`shadow-lg btn btn-primary`}>Add Blog</button>}
                {isPending && <button className={'shadow-lg btn btn-primary'}>Adding...</button>}

            </form>
        </div>
    )
}

export default Create;