"use client";
import styles from "./page.module.css";

export default function Filter() {
  return (
    <>
      <div>
        <form className={styles.filterForm}>
          <label for="sortBy">Sort by :</label>
          <div className={styles.selectBox}>
            <select className={styles.select} name="sortBy" id="sortBy">
              <option value="mostUpvotes">Most Upvotes</option>
              <option value="leastUpvotes">Least Upvotes</option>
              <option value="mostComments">Most Comments</option>
              <option value="leastComments">Least Comments</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
}
