function SearchList({ result }) {
  return (
    <div className="search-list">
      <div className="name-desc">
        <div className="name">{result[0]}</div>
        <p className="decription">{result[1]}</p>
      </div>
      <div className="version-ostag">
        <div className="version-year-wrapper">
          <div className="text-wrapper">version: {result[2]}</div>
          {/* <div class="text-wrapper">5 years ago</div> */}
        </div>
        {/* <div class="tag-wrapper">
          <div class="tag">
            <div class="tagname">redhat</div>
          </div>
          <div class="tag">
            <div class="tagname">redhat</div>
          </div>
          <div class="tag">
            <div class="tagname">redhat</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default SearchList;
