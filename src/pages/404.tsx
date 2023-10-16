import Head from 'next/head';
import NextLink from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, SvgIcon, Typography } from '@mui/material';
/**
 * `Page` React component.
 * 
 * Represents a custom 404 error page for the application. When users navigate to a route
 * that doesn't exist in the Next.js app, this component is displayed to provide feedback.
 * 
 * The component renders:
 * - A custom error image.
 * - An error message indicating that the page wasn't found.
 * - A suggestion that the user might have tried a non-existent route or made a mistake.
 * - A button that redirects the user back to the main page.
 * 
 * @returns {JSX.Element} The content of the 404 error page.
 */
const Page = () => (
  <>
    <Head>
      <title>
        404 | IGDb
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%'
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            sx={{
              mb: 3,
              textAlign: 'center'
            }}
          >
            <img
              alt="Under development"
              src="/assets/errors/error-404.png"
              style={{
                display: 'inline-block',
                maxWidth: '100%',
                width: 400
              }}
            />
          </Box>
          <Typography
            align="center"
            sx={{ mb: 3 }}
            variant="h3"
          >
            404: The page you are looking for is not here
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            variant="body1"
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <Button
            component={NextLink}
            href="/"
            startIcon={(
              <SvgIcon fontSize="small">
                <ArrowBackIcon />
              </SvgIcon>
            )}
            sx={{ mt: 3 }}
            variant="contained"
          >
            Go back
          </Button>
        </Box>
      </Container>
    </Box>
  </>
);

export default Page;
