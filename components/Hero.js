.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
}

@media (max-width: 768px) {
  .nav {
    display: flex;
    flex-direction: column;
  }

  .nav a {
    margin: 0.5rem 0;
  }
}
