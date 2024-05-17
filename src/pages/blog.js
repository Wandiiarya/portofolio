import { Content } from "next/font/google"

export default function blog() {
    return (
        <main>
            <h1>
                ini halaman blog
            </h1>
             <br/>
            <hr />
           
            
        <ul>
               {BLOCKED_PAGES.map((blog, i) => (
                   <li key={i} style={{
                      
                       
                }}>
                    <h2>{blog.title}</h2>
                    <p>{ blog.content}</p>
                </li>
            ))}  
        </ul>
            </main>
    )
}
const BLOCKED_PAGES = [{
    title: 'Blog 1',
    date: '2023-01-01',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    
},
    {
    title: 'Blog 1',
    date: '2023-01-01',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    
},
    {
    title: 'Blog 1',
    date: '2023-01-01',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    
}
]
       
    