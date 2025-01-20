"use client";

export default function Filter() {
  return (
    <>
      <div>
        <form className="filterForm">
          <label for="sortBy">Sort by :</label>
          <div className="selectBox">
            <select className="select" name="sortBy" id="sortBy">
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
