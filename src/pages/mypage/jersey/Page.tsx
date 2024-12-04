// import React from "react";
// const Ireland: React.FC = () => {
//   return (
//     <div className="" style={{ padding: 30, position: "relative" }}>
//       <img
//         className="h-1/2 w-1/2 rounded-lg"
//         // src={`${process.env.PUBLIC_URL}/2022-Santa-Cruz-Chameleon-Review_12.jpg`}
//         src={`${process.env.PUBLIC_URL}/373.png`}
//         alt="Fake Bourbon Logo"
//       />
//     </div>
//   );
// };
// const NewZealand: React.FC = () => {
//   return (
//     <div className="" style={{ padding: 30, position: "relative" }}>
//       <img
//         className="h-1/2 w-1/2 rounded-lg"
//         // src={`${process.env.PUBLIC_URL}/2022-Santa-Cruz-Chameleon-Review_12.jpg`}
//         src={`${process.env.PUBLIC_URL}/ab2011ss.jpg`}
//         alt="Fake Bourbon Logo"
//       />
//     </div>
//   );
// };
// const Jersey: React.FC = () => {
//   return (
//     <div>
//       <Ireland />
//       <NewZealand />
//     </div>
//     //   <div className="" style={{ padding: 30, position: "relative" }}>
//     //       <img
//     //         className="h-1/2 w-1/2 rounded-lg"
//     //         // src={`${process.env.PUBLIC_URL}/2022-Santa-Cruz-Chameleon-Review_12.jpg`}
//     //         src={`${process.env.PUBLIC_URL}/373.png`}
//     //         alt="Fake Bourbon Logo"
//     //     />
//     // </div>
//   );
// };
//
// export default Jersey;
import React from "react";

const Ireland: React.FC = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-start ml-8">
        <h2 className="text-2xl font-bold">Ireland 1998</h2>
      </div>
      <div className="flex items-center justify-start p-8">
        <img
          className="h-1/2 w-1/2 rounded-lg"
          src={`${process.env.PUBLIC_URL}/373.png`}
          alt="Ireland Jersey"
        />
        <div className="ml-8 bg-blue-100">
          <p>
            The team was not good this season, a wooden spoon whitewash. I was
            fortunate to see Andy Ward's debut vs. Wales in the first and only 5
            Nations game I witnessed in person thanks to the generousity of the
            folks at the Portadown Rugby Club. While the result was not
            desirable, I also got to see several succesful South African British
            & Irish Lions tourists play in this game including Keith Wood, Paul
            Wallace, Neil Jenkins, and Allan Bateman who scored for Wales right
            in front of us in the goal end stands. I couldn't find this jersey
            in my size when i was there in 1998, but I got this a few years ago
            to watch games and it is definitely my favorite vintage.
          </p>
        </div>
      </div>
    </div>
  );
};

const NewZealand: React.FC = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-end mb-4">
        <h2 className="text-2xl font-bold">New Zealand 2011</h2>
      </div>
      <div className="flex items-center justify-end">
        <div className="mr-8 bg-blue-100">
          <p>
            My personal third favorite All Blacks jersey as I have a soft spot
            for the early and mid 1990's vintage as cotton is more forgiving to
            unflattering physiques, but 2011 was a special year for the Kiwi's
            and this is the best image I could find of any of the three jerseys.
            The 2011 All Blacks, hosting the World Cup for the second time,
            having won the first one co-hosted with Australia, pressure was on
            for winning results at home after four disappointing tournaments in
            the intervening years. In an incredibly tight and tense game against
            France in the final they pulled out a 8-7 victory.
          </p>
        </div>
        <img
          className="h-1/2 w-1/2 rounded-lg"
          src={`${process.env.PUBLIC_URL}/ab2011ss.jpg`}
          alt="New Zealand Jersey"
        />
      </div>
    </div>
  );
};

const Ulster: React.FC = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-start mb-4">
        <h2 className="text-2xl font-bold">Ulster 2014/15</h2>
      </div>
      <div className="flex items-center justify-start">
        <img
          className="h-1/2 w-1/2 rounded-lg"
          src={`${process.env.PUBLIC_URL}/ulster.jpg`}
          alt="Ulster Jersey"
        />
        <div className="ml-8">
          <p>
            Ulster came in 4th, I had to review to find anything notable but it
            appears they led the competition in scrums. I included this jersey
            because I have one that I use for biking when I am active and fit
            enough to squeeze into it. Did I, a former front row specialist who
            occasionally got to run wild as a flanker, realize that I had
            ordered a 2XL pro fit jersey instead of the 2XL supporters kit? Not
            until I couldn't fit into it when it arrived. Once I got fit enough
            to wear it I was too light to prop effectively anymore, but I was
            also retired from playing so it all worked out. Not a favorite, but
            I like it and still have the grubby training one laying around
            somewhere.
          </p>
        </div>
      </div>
    </div>
  );
};

const BiLions: React.FC = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-end mb-4">
        <h2 className="text-2xl font-bold">British and Irish Lions 1997</h2>
      </div>
      <div className="flex items-center justify-end">
        <div className="mr-8 bg-blue-100">
          <p>
            Notice this has the 'Victory in South Arica' text above the crest.
            This is one of the jerseys manufactured after the tour to meet
            demand after the historic victory. I have the one made for the tour,
            so no added words. This shirt, along with the Ireland jersey above,
            and my 1996 All Blacks shirt from the Steinlager Tour to South
            Africa are among my favorites. I don't really wear the Lions one as
            it was hard to find and will be exensive to replace, but I enjoy
            watching old clips of those games and thinking about wearing it
            while I watch the highlights online. It's worth watching the Living
            with Lions video from this tour just for Jim Telfers speeches to the
            forwards in preparation for the tests. The best vintage jersey in my
            collection hands down.
          </p>
        </div>
        <img
          className="h-1/2 w-1/2 rounded-lg"
          src={`${process.env.PUBLIC_URL}/bil97.jpg`}
          alt="British and Irish Lions 1997"
        />
      </div>
    </div>
  );
};
const AucklandRL: React.FC = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-start mb-4">
        <h2 className="text-2xl font-bold">Auckland Warriors 1996</h2>
      </div>
      <div className="flex items-center justify-start">
        <img
          className="h-1/2 w-1/2 rounded-lg"
          src={`${process.env.PUBLIC_URL}/1996Lenco2.jpg`}
          alt="Ulster Jersey"
        />
        <div className="ml-8">
          <p>Auckland Warriors Rugby League</p>
        </div>
      </div>
    </div>
  );
};
const Jersey: React.FC = () => {
  return (
    <div className="">
      <div>
        <Ireland />
      </div>
      <div>
        <NewZealand />
      </div>
      <div>
        <Ulster />
      </div>
      <div>
        <BiLions />
      </div>
      <div>
        <AucklandRL />
      </div>
    </div>
  );
};

export default Jersey;
