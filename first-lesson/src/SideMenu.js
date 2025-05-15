import TagButton from "./TagButton"
const appStyle ={
  border : "5px solid teal",
  margin:"25px"
}
export default function SideMenu(){
return (
    <div style={appStyle}>
       <TagButton title ="Click"/>
       <TagButton title="Click Me"/>
       <TagButton title="اضغط"/>
       <TagButton/>
       <TagButton/>
       <TagButton/>
       <TagButton/>
    </div>
);
}