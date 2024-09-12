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
  Link,
} from "@mui/material";

function Doc() {
  return (
    <Container maxWidth="md">
      {/* Header Section */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to the App Tutorial
          </Typography>
          {/* <Typography variant="body1">
            Learn how to maximize the app's features with this guide.
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
              <ListItemText primary=" > Effortlessly keep your subitems in sync with changes made to the main column." />
            </ListItem>
            <ListItem>
              <ListItemText primary=" > Instantly update the person responsible for changes with the latest user who made the edit." />
            </ListItem>
            <ListItem>
              <ListItemText primary=" > Automatically update Start and End Dates based on Timeline when the Status changes." />
            </ListItem>
            <ListItem>
              <ListItemText primary=" > Ensure Start and End Dates reflect any changes in both Status and Timeline for accurate scheduling." />
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
              <ListItemText primary=" > Navigate to the App Marketplace in monday.com." />
            </ListItem>
            <ListItem>
              <ListItemText primary=' > Enter “Power Tools” into the search bar.' />
            </ListItem>
            <ListItem>
              <ListItemText primary=" > Select our app and click the install button (it may vary based on the button available on the home screen)." />
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
              <ListItemText primary=" > Head over to the Integration Center in the board." />
            </ListItem>
            <ListItem>
              <ListItemText primary=' > Type “Power Tools” into the search bar and select it. (If you encounter any issues finding it, refresh or try searching again until it appears.)' />
            </ListItem>
          </List>
          <CardMedia
            component="img"
            image="path_to_screenshot.png"
            alt="Integration Center Screenshot"
            sx={{ mt: 2 }}
          />
          <Typography variant="body1" gutterBottom>
             > Find the perfect automation for your needs, set it up, and watch it
            work its magic! Explore the{" "}
            <Link
              href="link_to_automation_page"
              target="_blank"
              rel="noopener noreferrer"
            >
              automation page
            </Link>{" "}
            for detailed insights on each automation process.
          </Typography>
        </CardContent>
      </Card>

      {/* Step 1: Setup */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Step 1: Setup
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary=" > Download and install the app." />
            </ListItem>
            <ListItem>
              <ListItemText primary=" > Complete the setup by logging in or creating an account." />
            </ListItem>
            <ListItem>
              <ListItemText primary=" > Ensure your device meets the system requirements for optimal performance." />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Step 2: Using Features */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Step 2: Using the Features
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary=" > Dashboard: Overview of activities and tasks."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary=" > Notifications: Real-time updates on tasks and interactions."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary=" > Settings: Customize your app experience."
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Step 3: Troubleshooting */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Step 3: Troubleshooting
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary=" > App won’t start: Ensure system requirements are met, try restarting or reinstalling the app."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary=" > Features not working: Check for updates and verify your internet connection."
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Final Notes */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            Final Notes
          </Typography>
          <Typography variant="body1" component="body4">
            Thank you for using our app! Visit our FAQ or contact support for
            more help.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Doc;
