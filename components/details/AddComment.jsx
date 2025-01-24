"use client";
export const dynamic = "force-dynamic";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { Addcomments } from "@/app/api/action";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AddComment({ userId, id }) {
  const maxChar = 250;
  const [char, setChar] = useState(maxChar);
  const [state, action] = useFormState(Addcomments, null);
  const router = useRouter();
  const formRef = useRef(null);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (!userId) {
      toast.info("yorum eklemek için giriş yapmanız gerekmektedir.");
    }

    if (state?.success) {
      toast.success(`${state.success}`);
      router.refresh();
      formRef.current.reset();
      setWarning(false);
    }

    if (userId && state?.error) {
      toast.error(`${state.error}`);
      setWarning(true);
    }
  }, [state, router]);

  function submitComment(e) {
    setChar(maxChar - e.target.value.length);
  }

  return (
    <div className={styles.addComment}>
      <h3 className={styles.addCommentH}>Add Comment</h3>
      <form ref={formRef} action={action}>
        <input type="text" hidden name="userId" value={userId} />
        <input type="number" hidden name="postId" value={id} />
        <textarea
          className={styles.addCommentTextarea}
          style={{
            border: warning ? "solid" : "initial",
            borderColor: warning ? "red" : "initial",
            borderWidth: warning ? "2px" : "1px",
          }}
          onChange={(e) => submitComment(e)}
          placeholder="Type your comment here"
          name="comment"
        ></textarea>
        <div className={styles.addCommentFooter}>
          <p className={styles.addCommentFooterP}>{char} Characters left</p>
          <button className={styles.postCommentBtn} disabled={char <= 0}>
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}
