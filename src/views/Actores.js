import Actor from "./Actor";
import PageWrapper from "./PageWrapper";

export default function Actores() {
  return (
    <PageWrapper>
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width2">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="topbar-filter">
                <p className="pad-change">
                  Found <span>1,608 celebrities</span> in total
                </p>
                <label>Sort by:</label>
                <select>
                  <option value="popularity">Popularity Descending</option>
                  <option value="popularity">Popularity Ascending</option>
                  <option value="rating">Rating Descending</option>
                  <option value="rating">Rating Ascending</option>
                  <option value="date">Release date Descending</option>
                  <option value="date">Release date Ascending</option>
                </select>
                <a href="celebritylist.html" className="list">
                  <i className="ion-ios-list-outline active"></i>
                </a>
                <a href="celebritygrid01.html" className="grid">
                  <i className="ion-grid "></i>
                </a>
              </div>
              <Actor
                imagen="images/uploads/ceblist1.jpg"
                nombre="John Cena"
                nacionalidad="USA"
                description="Dan Stevens was born at Croydon in Surrey on 10th October 1982.
                His parents are teachers. He was educated at Tonbridge School and
                trained in acting at the National Youth Theatre of Great
                Britain.."
              ></Actor>
              <div className="topbar-filter">
                <label>Reviews per page:</label>
                <select>
                  <option value="range">36 Reviews</option>
                  <option value="saab">18 Reviews</option>
                </select>

                <div className="pagination2">
                  <span>Page 1 of 6:</span>
                  <a className="active" href="#">
                    1
                  </a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                  <a href="#">6</a>
                  <a href="#">
                    <i className="ion-arrow-right-b"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-12 col-sm-12">
              <div className="sidebar">
                <div className="searh-form">
                  <h4 className="sb-title">Search celebrity</h4>
                  <form className="form-style-1 celebrity-form" action="#">
                    <div className="row">
                      <div className="col-md-12 form-it">
                        <label>Celebrity name</label>
                        <input type="text" placeholder="Enter keywords" />
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Celebrity Letter</label>
                        <select>
                          <option value="range">A</option>
                          <option value="saab">B</option>
                        </select>
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Category</label>
                        <select>
                          <option value="range">Actress</option>
                          <option value="saab">Others</option>
                        </select>
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Year of birth</label>
                        <div className="row">
                          <div className="col-md-6">
                            <select>
                              <option value="range">1970</option>
                              <option value="number">Other</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <select>
                              <option value="range">1990</option>
                              <option value="number">others</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 ">
                        <input
                          className="submit"
                          type="submit"
                          value="submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="ads">
                  <img src="images/uploads/ads1.png" alt="" />
                </div>
                <div className="celebrities">
                  <h4 className="sb-title">featured celebrity</h4>
                  <div className="celeb-item">
                    <a href="#">
                      <img src="images/uploads/ava1.jpg" alt="" />
                    </a>
                    <div className="celeb-author">
                      <h6>
                        <a href="#">Samuel N. Jack</a>
                      </h6>
                      <span>Actor</span>
                    </div>
                  </div>
                  <div className="celeb-item">
                    <a href="#">
                      <img src="images/uploads/ava2.jpg" alt="" />
                    </a>
                    <div className="celeb-author">
                      <h6>
                        <a href="#">Benjamin Carroll</a>
                      </h6>
                      <span>Actor</span>
                    </div>
                  </div>
                  <div className="celeb-item">
                    <a href="#">
                      <img src="images/uploads/ava3.jpg" alt="" />
                    </a>
                    <div className="celeb-author">
                      <h6>
                        <a href="#">Beverly Griffin</a>
                      </h6>
                      <span>Actor</span>
                    </div>
                  </div>
                  <div className="celeb-item">
                    <a href="#">
                      <img src="images/uploads/ava4.jpg" alt="" />
                    </a>
                    <div className="celeb-author">
                      <h6>
                        <a href="#">Justin Weaver</a>
                      </h6>
                      <span>Actor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
