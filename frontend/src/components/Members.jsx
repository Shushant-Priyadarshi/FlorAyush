import React from 'react'

const Members = (props) => {
  return (
    <section className="text-gray-600 body-font">
          <div className="container mx-auto flex py-28 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
  className="max-w-xs h-auto ml-16 object-cover object-center rounded-full"
  alt="hero"
  src={`${props.link}`}
/><br/>

            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1  className="title-font text-white sm:text-4xl text-3xl mb-4 font-medium ">
              {`${props.name}`} <p style={{display:"inline-block"}}>( {`${props.role}`} )</p>
                <br className="hidden lg:inline-block" />
                
              </h1>
              <p  style={{ color: '#A2CA71' }} className="mb-8 text-yellow-500 leading-relaxed text-xl"><br />
              {`${props.desc}`}
              </p>
              <div className="flex justify-center mt-6 ">
                <a href={`${props.git}`}><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Github
                </button></a>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Instagram
                </button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Members