import Image from "next/image";
import AddFeedBackBtn from "../header/button";
import "./edit.css";


export default function EditFeedback(){
    return(
        <>
        <dialog open={false}>
            
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
                <button className="delete">Delete</button>
                <button className="cancel">Cancel</button>
                <AddFeedBackBtn/>
             </div>

             <Image className="img1" src="/assets/circle.svg" width={56} height={56}></Image>
             <Image className="img2" src="/assets/imgedit.svg" width={20} height={20}></Image>

            </form>
        </dialog>
        </>
    )
}