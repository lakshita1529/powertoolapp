import React from "react";
import "../../styles/Doc.module.css";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Doc() {
  return (
    <Container maxWidth="md">
      {/* Header Section */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            Getting Started
          </Typography>
          {/* <Typography variant="body1">
           • Learn how to maximize the app's features with this guide.
          </Typography> */}
        </CardContent>
      </Card>

      {/* Unlock the Power Section */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Unlock the Power of Our App
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Auto-Assign Tasks" 
                 secondary="Automatically assign tasks to the right person, ensuring clarity and accountability with zero manual effort."/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Subitem Automation"
              
              secondary="Seamlessly manage subitems for better organization."/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Timeline Automations"
              
              secondary="Effortlessly manage dates and timelines to keep projects on track and your team aligned with goals."/>
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Installation Instructions */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            How to Install Our App
          </Typography>
          <List>
            <ListItem>
            <ListItemText
            primary="Open the App Marketplace"
            secondary="Navigate to the App Marketplace on monday.com."
          />
            </ListItem>
            <ListItem>
            <ListItemText
            primary="Search for Power Tools "
            secondary="Enter “Power Tools” into the search bar. "
          />
            </ListItem>
            <ListItem>
            <ListItemText
            primary="Click & Install  "
            secondary="Select our app and click the install button  "
          />
            </ListItem>
          </List>
          <Typography variant="body1" gutterBottom>
            Need help? Watch the video tutorial below:
          </Typography>
          <CardMedia
            component="video"
            controls
            src="path_to_video.mp4"
            sx={{ width: "100%", height: "auto" }}
          />
          <CardMedia
            component="img"
            image="path_to_screenshot.png"
            alt="Marketplace Screenshot"
            sx={{ mt: 2 }}
          />
        </CardContent>
      </Card>

      {/* Getting Started Instructions */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Getting Started with Our App
          </Typography>
          <List>
            <ListItem>
            <ListItemText
            primary="Access the Integration Center "
            secondary="Head over to the Integration Center on the board. "
          />
            </ListItem>
            <ListItem>
            <ListItemText
            primary="Search for 'Power Tools'"
            secondary={
              <>
                Type "Power Tools" into the search bar and select it.
                <br />
                <Typography variant="body2" component="span" sx={{ fontStyle: 'italic' }}>
                  (If you encounter any issues finding it, refresh or try searching again until it appears.)
                </Typography>
              </>
            }
          />
            </ListItem>
            <ListItem>
            <ListItemText
            primary="Choose and Configure Your Automation "
            secondary="Find the perfect automation for your needs, set it up, and watch it work its magic! "
          />
            </ListItem>


          </List>
          <CardMedia
            component="img"
            image="path_to_screenshot.png"
            alt="Integration Center Screenshot"
            sx={{ mt: 2 }}
          />
        <Typography variant="body2" gutterBottom sx={{ fontStyle: 'italic' }}>
  Explore the{" "}
  <RouterLink to="/automation">
    automation page
  </RouterLink>{" "}
  for detailed insights on each automation process.
</Typography>
        </CardContent>
      </Card>

    
    </Container>
  );
}

export default Doc;
