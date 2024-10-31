"use client"
import Image from "next/image";
import AddFeedBackBtn from "../header/button";
import "./edit.css";
import { AdvancedFetch } from "@/utils/advancedfetch";


export default function EditFeedback(){

    async function handleDelete(e){
     e.preventDefault();
     const {response , status} = await AdvancedFetch(`https://feedback.nazlisunay.com.tr/api/Opinions/12` , "DELETE");  
     console.log(response);
     console.log(status);
        
    }

    return(
        <>
        <dialog open={true}>
            
            <form >
             <h3>Editing ‘Add a dark theme option’</h3>
             <div>
                <p>Feedback Title</p>
                <label htmlFor="titleEdit">Add a short, descriptive headline</label>
                <input type="text" name="title" id="titleEdit"/>
             </div>

             <div>
                <p>Category</p>
                <label htmlFor="categoryEdit">Choose a category for your feedback</label>
                <select name="category" id="categoryEdit">
                    <option value="feature">Feature</option>
                </select>
             </div>

             <div>
                <p>Update Status</p>
                <label htmlFor="categoryChange">Change feedback state</label>
                <select name="category" id="categoryChange">
                    <option value="planned">Planned</option>
                </select>
             </div>

             <div>
                <p>Feedback Detail</p>
                <label htmlFor="detailEdit">Include any specific comments on what should be improved, added, etc.</label>
                <textarea name="detail" id="detailEdit" placeholder="It would help people with light sensitivities and who prefer dark mode."></textarea>
             </div>

             <div className="buttons">
              <button onClick={(e)=> handleDelete(e)} className="delete">Delete</button>
                
                <button className="cancel">Cancel</button>
                <button className="cancel">Add Feedback</button>

             </div>

             <Image className="img1" src="/assets/circle.svg" width={56} height={56}></Image>
             <Image className="img2" src="/assets/imgedit.svg" width={20} height={20}></Image>

            </form>
        </dialog>
        </>
    )
}