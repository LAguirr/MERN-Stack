import { Link } from 'react-router-dom' 
import { PiBookOpenTextLight } from 'react-icons/pi'; 
import { BiUserCircle } from 'react-icons/bi'; 
import { AiOutlineEdit } from 'react-icons/ai'; 
import { BsInfoCircle } from 'react-icons/bs'; 
import { MdOutlineDelete } from 'react-icons/md'; 


const BooksCard = ({books}) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item)=> (
      <div key={item._id}
        className="border-2 border-grey-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg ">
        {item-publishYear}
      </h2>
      </div>
      )
      )}
    </div>
  ) 
}

export default BooksCard     