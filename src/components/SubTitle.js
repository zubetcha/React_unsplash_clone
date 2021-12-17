import React from "react";
import { Grid, Text } from "../elements";

const SubTitle = (props) => {
  const Name = props.name;

  if (Name == "Holidays") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          Holidays
        </Text>
        <Text size="18px" color="#e">
          Stay connected this holiday season. Show us how you are spending your
          holidays, and the role tech plays on your favorite traditions. Submit
          images of your family movie night watching Christmas classics, online
          Hanukkah gift shopping from the couch, to sharing Kwanzaa dinner over
          video chat with friends.
          <br />
          Curated by Surface. Learn more about this topic takeover here.
        </Text>
      </Grid>
    );
  }
  if (Name == "Blockchain") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          Blockchain
        </Text>
        <Text size="18px" color="#e">
          The blockchain platform, Tezos, is in the spotlight on the new
          Blockchain Topic to help visualize the endless possibility of
          decentralization. Submit images depicting things like NFTs,
          cryptocurrency and blockchain technology.
          <br />
          Incorporate Tezos in your submission for a chance to win a prize!
          Learn more here.
        </Text>
      </Grid>
    );
  }
  if (Name == "Wallpapers") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          Wallpapers
        </Text>
        <Text size="18px" color="#e">
          From epic drone shots to inspiring moments in nature — submit your
          best desktop and mobile backgrounds.
        </Text>
      </Grid>
    );
  }
  if (Name == "3DRenders") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          3D Renders
        </Text>
        <Text size="18px" color="#e">
          For the first time ever, Unsplash is accepting a new category of
          images outside of photography. Submit your 3-dimensional images,
          designed in the software of your choice, rendered into JPEG images.
          <br />
          Learn more here.
        </Text>
      </Grid>
    );
  }
  if (Name == "Textures&Patterns") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          Textures & Patterns
        </Text>
        <Text size="18px" color="#e">
          Whether you’re looking for stunning macro-photography or shots of
          complex architectural shapes — you’ve come to the right place.
        </Text>
      </Grid>
    );
  }
  if (Name == "Architecture") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          Architecture
        </Text>
        <Text size="18px" color="#e">
          Explore exteriors from around the world — from brutalist buildings to
          minimalist structures that will give you a new appreciation for the
          art of architecture.
        </Text>
      </Grid>
    );
  }
  if (Name == "Experimental") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          Experimental
        </Text>
        <Text size="18px" color="#e">
          Through the use of unlikely textures, intriguing subject matter, and
          new formats — photography has the power to challenge our perspectives
          and push creativity forward.
        </Text>
      </Grid>
    );
  }
  if (Name == "Nature") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          Nature
        </Text>
        <Text size="18px" color="#e">
          Let’s celebrate the magic of Mother Earth — with images of everything
          our planet has to offer, from stunning seascapes, starry skies, and
          everything in between.
        </Text>
      </Grid>
    );
  }
  if (Name == "Business&Work") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          Business & Work
        </Text>
        <Text size="18px" color="#e">
          Reflecting the realities of the modern workplace in their many forms —
          from images of remote working and start-ups to shots of engineers and
          artists at work.
        </Text>
      </Grid>
    );
  }
  if (Name == "Fashion") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          Fashion
        </Text>
        <Text size="18px" color="#e">
          From street-style shots to editorial photography — find the latest
          trends in beauty and fashion.
        </Text>
      </Grid>
    );
  }
  if (Name == "Food&Drink") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          Food & Drink
        </Text>
        <Text size="18px" color="#e">
          It’s time to indulge, and throw yourself into the world of culinary
          photography — with shots of elaborate dinner parties, decadent
          pastries and more.
        </Text>
      </Grid>
    );
  }
  if (Name == "Health&Wellness") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          Health & Wellness
        </Text>
        <Text size="18px" color="#e">
          Celebrate a healthy mind, body and soul with photographs that showcase
          everything from new medical discoveries and alternative medicines, to
          healthy eating and meditation.
        </Text>
      </Grid>
    );
  }
  if (Name == "CurrentEvents") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          Current Events
        </Text>
        <Text size="18px" color="#e">
          Covering the latest important events, news-worthy moments and
          movements from around the world — from political protests to cultural
          celebrations. When submitting, please provide a photo description so
          we understand the full context of the image.
        </Text>
      </Grid>
    );
  }
  if (Name == "People") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          People
        </Text>
        <Text size="18px" color="#e">
          Real people, captured. Photography has the power to reflect the world
          around us, give voice to individuals and groups within our communities
          — and most importantly — tell their story.
        </Text>
      </Grid>
    );
  }
  if (Name == "Interiors") {
    return (
      <Grid padding="0px 150px 0px 0px">
        <Text size="45px" color="#e" bold>
          Interiors
        </Text>
        <Text size="18px" color="#e">
          Whether it’s a peaceful bedroom or a cluttered kitchen — photographs
          of our spaces tell the story of who we are.
        </Text>
      </Grid>
    );
  }

  return <></>;
};

export default SubTitle;
