import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
	return (
		<div className={styles.skills}>
			<h1>Skills</h1>
			<div className={styles['skills-wrapper']}>
				<ul>
					<li>Python 100%</li>
				</ul>
			</div>
		</div>
	);
};

export default Skills;
