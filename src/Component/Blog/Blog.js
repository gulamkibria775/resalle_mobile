import React from "react";
import useTitle from "../../hooks/useTitle";
import "./Blog.css";

export default function Blog() {
  // useTitle('Blog');
  useTitle('Blog')
  return (
    <div className="blog">
      <div className="p-3 text-justify">
        <h1 className="text-2xl mb-4"> What are the different ways to manage a state in a React application?</h1>
        <p>
        Therefore, this article will clearly discuss the types of states such as Logical, Server, Form, Navigation, and Browser and the main ways to handle them. Also, it will help 25.12% of the developers who would like to learn React in the future.
        </p>
      </div>

      <div className="p-3 text-justify">
        <h1 className="text-2xl mb-4">How does prototypical inheritance work?</h1>
        <p>
        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object
        </p>
      </div>

      <div className="p-3 text-justify">
        <h1 className="text-2xl mb-4">What is a unit test? Why should we write unit tests?</h1>
        <p>
        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
        </p>
      </div>

      <div className="p-3 text-justify">
        <h1 className="text-2xl mb-4">React vs. Angular vs. Vue?</h1>
        <p>
        Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option
        </p>
      </div>
    </div>
  );
}
