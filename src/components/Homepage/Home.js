import React from "react";

export default function Home() {
  return (
    <>
      <div className="container" style={{ letterSpacing: "0.3px" }}>
        <h2 className="text-center my-5 font-weight-bold">WHAT WE OFFER</h2>
        <div className="row row-cols-2 g-3 m-4 ">
          <div className="col ">
            <div className="card  " style={{ width: "35rem" }}>
              <img
                src={require("../../assets/Room0026.png")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body m-2">
                <h5 className="card-title">PCs</h5>
                <p className="card-text py-3">
                  A personal computer (PC) is a multi-purpose microcomputer
                  whose size, capabilities, and price make it feasible for
                  individual use.[1] Personal computers are intended to be
                  operated directly by an end user, rather than by a computer
                  expert or technician.
                </p>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="card" style={{ width: "35rem" }}>
              <img
                src={require("../../assets/console.jpg")}
                className="card-img-top"
                alt="..."
                style={{ height: "314px" }}
              />
              <div className="card-body m-2">
                <h5 className="card-title font-weight-bold ">Consoles</h5>
                <p className="card-text py-3">
                  A specialized desktop computer used to play video games. The
                  two most popular consoles are Sony's PlayStation and
                  Microsoft's Xbox. Nintendo's Wii was also a contender that
                  simulated physical participation in activities such as bowling
                  and playing tennis (see Wii). Almost all video game consoles
                  are manufactured in Asia.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mt-4" style={{ width: "35rem" }}>
              <img
                src={require("../../assets/canteen+2.jpg")}
                className="card-img-top"
                alt="..."
                style={{ height: "314px" }}
              />
              <div className="card-body m-2">
                <h5 className="card-title font-weight-bold ">cafeteria</h5>
                <p className="card-text py-3">
                  cafeteria, self-service restaurant in which customers select
                  various dishes from an open-counter display. The food is
                  usually placed on a tray, paid for at a cashiers station, and
                  carried to a dining table by the customer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mt-4" style={{ width: "35rem" }}>
              <img
                src={require("../../assets/pooltable.webp")}
                className="card-img-top"
                alt="..."
                style={{ height: "314px" }}
              />
              <div className="card-body m-2">
                <h5 className="card-title font-weight-bold ">Pool Table</h5>
                <p className="card-text py-3">
                  Pool is a classification of cue sports played on a table with
                  six pockets along the rails, into which balls are deposited.
                  Each specific pool game has its own name, some of the
                  better-known include eight-ball, blackball, nine-ball,
                  ten-ball, seven-ball, straight pool, one-pocket, and bank
                  pool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
