import React, { useState, useEffect, FC } from 'react';
// import PieChart from '../components/PieChart';

interface AboutProps {
    initialLoading?: boolean;
}

const TextView: FC = () => {
  return (
    <div className="w-3/5 mx-auto mt-10">
    <h1 className="text-3xl">A simple Next.js "About Page" page written using Typescript.</h1>

  <div className=" rounded-lg p-10 bg-gray-100 space-y-4 text-lg border-2 border-gray-500 mt-5">
    <p>{"🙏"}{" "}Apologies for the loading delay when opening this view, I added the loading prop so I would have a page to write a
          test against for the loading state(s). Otherwise this simple text would load immediately and not steal three seconds of your time.</p>
        <p>The "Jonny's Bikes" app was built with three primary goals in mind. First to practice with django as the back end rest framework using an existing database, in order to keep my python testing skills up to speed.
            Second, utilize the echarts {"📈"} module to create some interesting visual components that could be integrated into a React App, which leads into the third goal. Practice React development to get stronger with testing, deployment, automation, etc... of React and React Native apps.
          </p>
        <p>{"🚲"}{" "} My bicycle stable, collection, hoard... seemed like a nice simple dataset to use for a fun SPA. Technically the family bikes, but I take care of them.</p>
        <p>NextJS is kind of overkill for a SPA, so I added a few other views with added functionality. This About page
          and a page wittily titled Fake Age Restriction, that has an added age confirmation button. There is in fact no age
          restricted
          content on this site despite the needed confirmation of being 21 or older.</p>
        <p>The data is stored in a simple Postgres database with most of the details in a few relational tables to keep
          things simple in the base table</p>
        <p>I used Django this time as I mentioned above for practice. I will likely build an express-graphql version for
          any deployments.</p>
    <p>Almost forgot the most relevant part for me, I wanted to practice using echarts with react, thats why the whole thing exists.</p>
    <p>Any other relevant detail will be on the github repository page.</p>
      </div>
  </div>
      );
      };


      const About: FC<AboutProps> = ({ initialLoading}) => {

      const [isLoading, setIsLoading] = useState(initialLoading ?? true);

          useEffect(() => {
              if (initialLoading) {
                  const timer = setTimeout(() => {
                      setIsLoading(false);
                  }, 3000); // Adjust delay as needed

                  return () => clearTimeout(timer); // Cleanup on unmount
              }
          }, [initialLoading]);


          return (
      <div>
        {isLoading ? (
          <div className="spinner-container flex flex-col space-y-1.5">
            <div className="spinner"></div>
            <div>Loading ...</div>
          </div>
          ) : (
          <div className="mx-auto text-left">
             <TextView/>
          </div>
          )}
    </div>
  );
};

export default About;
