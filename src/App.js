import './App.css';
import TypeAnimation from 'react-type-animation';
import FadeIn from 'react-fade-in';
import { IconButton } from '@mui/material';
import { Delete, Email, FileCopy, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Row } from 'react-bootstrap';

const links = {
	LinkedIn: "https://www.linkedin.com/in/liam-earle-98b553185/",
	GitHub: "https://github.com/liam-earle",
	Instagram: "https://www.instagram.com/liam__earle/",
	Resume: "https://liamearle.ca/resume/",
	Email: "mailto:me@liamearle.ca"
}

export default function App() {
	var totalPageViewTime = 20000;
	return (
		<div className="App">
			<header className="App-header">
				<FadeIn>
					<TypeAnimation
						cursor={true}
						sequence={[
							1000,
							'Hi there,',
							1000,
							'I\'m Liam',
							1000
						]}
						wrapper="header"
						repeat={1}
					/>
				</FadeIn>
				<FadeIn delay={4000}>
					<div className='infoText'>I'm a Computer Engineering Major at MUN expecting to graduate in 2025. Currently, I'm working as a Full-Stack Developer at <a href='https://bluedropism.com/' className='App-link'><b>Bluedrop ISM</b></a>. I'm proficient in Dart, C++, C#, Java, JavaScript, and Python. Below you can find links to my LinkedIn, GitHub, Photography Instagram, Resume and E-Mail at which you can reach me.</div>
				</FadeIn>
				<FadeIn delay={5000}>
					<Row>
						<IconButton size="large" href={links.LinkedIn}>
  							<LinkedIn htmlColor='#FFFFFF' fontSize="inherit"/>
						</IconButton>
						<IconButton size="large" href={links.GitHub}>
  							<GitHub htmlColor='#FFFFFF' fontSize="inherit"/>
						</IconButton>
						<IconButton size="large" href={links.Instagram}>
  							<Instagram htmlColor='#FFFFFF' fontSize="inherit"/>
						</IconButton>
						<IconButton size="large" href={links.Resume}>
  							<FileCopy htmlColor='#FFFFFF' fontSize="inherit"/>
						</IconButton>
						<IconButton size="large" href={links.Email}>
  							<Email htmlColor='#FFFFFF' fontSize="inherit"/>
						</IconButton>
					</Row>
				</FadeIn>
			</header>
		</div>
	);
}

