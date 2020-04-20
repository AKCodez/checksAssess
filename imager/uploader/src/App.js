import React,{useState} from 'react';
import ImageUploader from "react-images-upload";
import Default from './components/Default';
import Case from './components/Case'
export default function App(props) {

  const [test,setTest] = useState(false)

  switch(true) {
          case test: 
          return <Case/>
    default:
      return <Default setTest={setTest}/>
};

}
