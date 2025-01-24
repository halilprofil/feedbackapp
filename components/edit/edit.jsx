"use client";
export const dynamic = "force-dynamic";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import { deleteAllCommentsOfOpinion, EditFeedbacks } from "@/app/api/action";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Login from "../login/login";
import { baseUrl } from "../config/config";

export default function EditFeedback({ id, data, show, setShow, userId, login }) {
  const [state, action] = useFormState(EditFeedbacks, null);
  const dialogRef = useRef(null);
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const localUrl = baseUrl;
      console.log("Delete URL:", `${localUrl}/api/Opinions/${id}`);

      // Yorumları siliyoruz ki backend yorumlu opinionda hata vermesin
      await deleteAllCommentsOfOpinion(id);
      console.log("Comments deleted before deleting the opinion");

      // Görüşü (opinion) sil
      const response = await fetch(`${localUrl}/api/Opinions/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      });

      console.log(response);

      if (response.ok) {
        toast.success("Feedback deleted successfully!");
        setShow(false);
        window.location.href = "/";
      } else {
        toast.error("Failed to delete feedback.");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while deleting feedback.");
    }
  };

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

  return (
    <>
      {userId && (
        <dialog className={styles.dialog} ref={dialogRef} open={show}>
          <form className={styles.form} action={action}>
            {" "}
            {/* Save Feedback işlemi */}
            <input className={styles.formInput} type="hidden" name="postId" value={id} />
            <h3 className={styles.formH}>Editing ‘Add a dark theme option’</h3>
            <div className={styles.formDiv}>
              <p className={styles.formP}>Feedback Title</p>
              <label className={styles.formLabel} htmlFor="titleEdit">
                Add a short, descriptive headline
              </label>
              <input className={styles.formİnput} type="text" name="title" id="titleEdit" defaultValue={data.title} />
            </div>
            <div className={styles.formDiv}>
              <p className={styles.formP}>Category</p>
              <label className={styles.formLabel} htmlFor="categoryEdit">
                Choose a category for your feedback
              </label>
              <select className={styles.formSelect} name="category" id="categoryEdit" defaultValue={data.category}>
                <option value="feature">Feature</option>
                <option value="UI">UI</option>
                <option value="UX">UX</option>
                <option value="Enhancement">Enhancement</option>
                <option value="Bug">Bug</option>
              </select>
            </div>
            <input className={styles.formİnput} type="hidden" name="userId" value={userId} />
            <div className={styles.formDiv}>
              <p className={styles.formP}>Update Status</p>
              <label className={styles.formLabel} htmlFor="status">
                Change feedback state
              </label>
              <select className={styles.formSelect} name="status" id="status" defaultValue={data.status}>
                <option value="Planned">Planned</option>
                <option value="InProgress">In-Progress</option>
                <option value="Live">Live</option>
              </select>
            </div>
            <div className={styles.formDiv}>
              <p className={styles.formP}>Feedback Detail</p>
              <label className={styles.formLabel} htmlFor="detailEdit">
                Include any specific comments on what should be improved, added, etc.
              </label>
              <textarea
                className={styles.formTextarea}
                name="detail"
                id="detailEdit"
                placeholder="It would help people with light sensitivities and who prefer dark mode."
                defaultValue={data.detail}
              ></textarea>
            </div>
            <div className={styles.buttons}>
              <button type="button" onClick={handleDelete} className={styles.delete}>
                Delete
              </button>
              <button type="button" onClick={() => setShow(false)} className={styles.cancel}>
                Cancel
              </button>
              <button type="submit" className={styles.save}>
                Save Feedback
              </button>
            </div>
          </form>

          <Image className={styles.img1} src="/assets/circle.svg" width={56} height={56} alt="Circle" />
          <Image className={styles.img2} src="/assets/imgedit.svg" width={20} height={20} alt="Edit Icon" />
        </dialog>
      )}
      {login && <Login login={login} />}
    </>
  );
}
