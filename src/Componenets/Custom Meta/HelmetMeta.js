import React from 'react'
import { Helmet } from 'react-helmet'

export default function HelmetMeta({ pageName = "Abdul jabbar", description, keywords = '',title='Abdul jabbar' }) {
  let des = description || "I'm a full-stack developer in JavaScript/NodeJS technologies. I've 3+ years of experience in MERN stack application development."
  let ke = keywords + " HTML, CSS, JavaScript,react,c,c++,cpp,website developer,full stack developer , abdul jabbar,abdul,jabbar,dev abdul,dev abdul jabbar,dev abdul jabbar 15,mern,node,js,web developer, abduljabbar, abduljabber, abdul jabbar 15"
  console.log(ke)
  return (
    <div>
      <Helmet>
        <title>{pageName}</title>
        <meta name="title" content={title} />
        <meta name="description" content={des} />
        <meta name="keywords" content={ke} />
        <meta name="author" content="Abdul Jabbar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {
         
        }
      </Helmet>
    </div>
  )
}
