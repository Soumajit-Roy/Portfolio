import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; Soumajit Roy</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    left: '0',
    bottom: '0',
    width: '100%',
  },
  text: {
    margin: '5px 0',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
  },
};

export default Footer;
