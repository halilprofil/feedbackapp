"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useFormState } from "react-dom";
import { CreateFeedbacks } from "@/app/api/action";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation"; // useRouter import edildi

export default function CreateFeedback({ show, setShow, userId }) {
  const [state, action] = useFormState(CreateFeedbacks, null);
  const dialogRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (state?.error) {
      toast.error(state?.error);
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
          <form action={action} className={styles.createFor}>
            <h3 className={styles.createHeader}>Create New Feedback</h3>
            <div className={styles.dialogDiv}>
              <h4 className={styles.createTitle}>Create New Feedback</h4>
              <div className={styles.dialogDiv}>
                <p className={styles.p}>Feedback Title</p>
                <label className={styles.label} htmlFor="createTitle1">
                  Add a short, descriptive headline
                </label>
                <input className={styles.input} type="text" name="title" id="createTitle1" />
                {state?.title && <div className={styles.error}>{state.title}</div>}
              </div>

              <div className={styles.dialogDiv}>
                <p className={styles.p}>Category</p>
                <label htmlFor="createCategory1">Choose a category for your feedback</label>
                <select className={styles.select} name="category" id="createCategory1">
                  <option value="UI">UI</option>
                  <option value="UX">UX</option>
                  <option value="Enhancement">Enhancement</option>
                  <option value="Bug">Bug</option>
                  <option value="Feature">Feature</option>
                </select>
                {state?.category && <div className={styles.error}>{state.category}</div>}
              </div>

              <input className={styles.input} type="text" name="userId" hidden value={userId} />
              <input className={styles.input} type="text" name="status" hidden value="Planned" />

              <div className={styles.dialogDiv}>
                <p className={styles.p}>Feedback Detail</p>
                <label htmlFor="createDetail1">Include any specific comments on what should be improved, added, etc.</label>
                <textarea className={styles.textarea} name="detail" id="createDetail1"></textarea>
                {state?.detail && <div className={styles.error}>{state.detail}</div>}
              </div>

              <div className={styles.buttons}>
                <button type="button" className={styles.cancel} onClick={() => setShow(false)}>
                  Cancel
                </button>
                <button type="submit" className={styles.KaydetBtn}>
                  Add Feedback
                </button>
              </div>

              <Image className={styles.img1} src="/assets/circle.svg" width={56} height={56} alt="Circle" />
              <Image className={styles.img2} src="/assets/+.svg" width={16} height={16} alt="Plus Icon" />
            </div>
          </form>
        </dialog>
      )}
    </>
  );
}
