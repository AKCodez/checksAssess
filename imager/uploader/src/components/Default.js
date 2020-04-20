import React,{useState} from 'react';
import ImageUploader from "react-images-upload";

const Default = props => {
  const [pictures, setPictures] = useState([]);
  const imageName = "flr1-1.jpg"
  const onDrop = picture => {
if(picture[0]){
  if(picture[0].name === imageName){
        props.setTest(true)
      }
}
    else {
      setPictures([...pictures, picture]);
    }
  
  };
  return (
    
    <div>
      
      <img style={{height:'16vh', width:'100%'}} src="./header.png"/>
    <ImageUploader
    style={{marginTop:20,marginBottom:20}}
      {...props}
      withPreview={true}
      label={'Floor Plan Verification'}
      withIcon={true}
      onChange={onDrop}
      imgExtension={[".jpg", ".gif", ".png", ".gif",".pdf"]}
      maxFileSize={9242880}
      />
      <img style={{height:'100%',width:'100%'}} src="./footer.png"/>
      </div>
  );
};



export default Default;
