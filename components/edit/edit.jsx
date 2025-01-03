"use client";
import Image from "next/image";
import "./edit.css";
import { useEffect, useRef } from "react";
import { DeleteFeedbacks, EditFeedbacks } from "@/app/api/action";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function EditFeedback({ id, data, show, setShow, userId }) {
  const [state, action] = useFormState(EditFeedbacks, null);
  const [deleteState, deleteAction] = useFormState(DeleteFeedbacks, null);
  const dialogRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (state?.editError) {
      toast.error(state?.editError);
    }
    if (state?.success) {
      toast.success(state?.success);
      dialogRef.current.close();
      router.refresh(); // Sayfayı yeniden yükler
    }
  }, [state, router]);

  useEffect(() => {
    if (deleteState?.error) {
      toast.error(deleteState?.error);
    }
    if (deleteState?.success) {
      toast.success(deleteState?.success);
      dialogRef.current.close();
      router.refresh(); // Sayfayı yeniden yükler
    }
  }, [deleteState, router]);

  return (
    <>
      <dialog ref={dialogRef} open={show}>
        <form action={action}> {/* Save Feedback işlemi */}
          <input type="hidden" name="postId" value={id} />
          <h3>Editing ‘Add a dark theme option’</h3>
          <div>
            <p>Feedback Title</p>
            <label htmlFor="titleEdit">Add a short, descriptive headline</label>
            <input
              type="text"
              name="title"
              id="titleEdit"
              defaultValue={data.title}
            />
          </div>

          <div>
            <p>Category</p>
            <label htmlFor="categoryEdit">Choose a category for your feedback</label>
            <select name="category" id="categoryEdit" defaultValue={data.category}>
              <option value="feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>
          </div>
          <input type="hidden" name="userId" value={userId} />

          <div>
            <p>Update Status</p>
            <label htmlFor="status">Change feedback state</label>
            <select name="status" id="status" defaultValue={data.status}>
              <option value="Planned">Planned</option>
              <option value="InProgress">In-Progress</option>
              <option value="Live">Live</option>
            </select>
          </div>

          <div>
            <p>Feedback Detail</p>
            <label htmlFor="detailEdit">
              Include any specific comments on what should be improved, added, etc.
            </label>
            <textarea
              name="detail"
              id="detailEdit"
              placeholder="It would help people with light sensitivities and who prefer dark mode."
              defaultValue={data.detail}
            ></textarea>
          </div>

          <div className="buttons">
            <button
              type="button"
              onClick={() => setShow(false)}
              className="cancel"
            >
              Cancel
            </button>
            <button type="submit" className="save">
              Save Feedback
            </button>
          </div>
        </form>

        <form action={deleteAction} className="deleteForm"> {/* Delete işlemi */}
          <input type="hidden" name="postId" value={id} />
          <button type="submit" className="delete">
            Delete
          </button>
        </form>

        <Image
          className="img1"
          src="/assets/circle.svg"
          width={56}
          height={56}
          alt="Circle"
        />
        <Image
          className="img2"
          src="/assets/imgedit.svg"
          width={20}
          height={20}
          alt="Edit Icon"
        />
      </dialog>
    </>
  );
}
