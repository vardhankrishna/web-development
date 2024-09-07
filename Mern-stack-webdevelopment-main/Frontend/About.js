import React from "react";
import web1 from "./bike.jpg"
import web2 from "./home.jpg";
import web3 from "./overseas.jpg";
function About() {
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">SDP PROJECT</h1>

        <h3>HEALTH AND LIFE INSURANCE</h3>
        <p>POLICIES</p>
        <img src={web1} alt="..." className="col-4 mx-auto"/>
        <h5><b>bike insurence</b></h5>
        <img src={web2} alt="..." className="col-3 mx-auto"/>
       <h5> <b>home insurence</b></h5>
        <img src={web3} alt="..." className="col-3 mx-auto"/>
        <h5><b>overseas</b></h5>
        <hr className="my-4" />
        <p>
          <h6>BE AWARE BE ASSURED. Make your life safe, get your insurance done immediately</h6>
        </p>

        <p>Secure yourself from any unseen eventuality by taking a PA policy. Buy online in few quick steps</p>
        <p>Breath easy when you travel overseas with UIIC Overseas Travel Policy.</p>
        <p>Get our full support to resolve your queries and doubts related to Online Policies</p>
        <p>Buy a policy from our bouquet of  Online Policies in few easy steps with a click</p>
        <p>In few easy steps just secure your entire family's health needs ,take a online policy today.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;