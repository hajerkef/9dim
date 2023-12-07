import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
export default function Compont() {
  return (
    <div>
      <h1>application</h1>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="card" style={{width: '300px', top:'20px', left:'50px'}}>
  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAGQAZAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgEHBv/EADYQAAICAAIGBgkDBQAAAAAAAAABAgMEEQUSITEzcSNBUXKxwQYTFDJhocLR8CKBkTRSU4KS/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECBAP/xAAeEQEBAAICAgMAAAAAAAAAAAAAAQIxAxEhMhITQf/aAAwDAQACEQMRAD8A+4gAAAAI8RdXh6Z3XSUa4RcpSfUjPq9INF3WQrqxcJTnJRjFb22abSe9ZmbpSEVZg8opdOnsRF7TOnFHpFou+qdteJzrrlGMpOEkk2s1vRYwelsDjrXVhcRCyxR1nFdh+K9FYr1WI1knlPBtZ9Tye0+gqEU9kUuSIltTlJHQALKgAAAAAAABzZJxhKSWbSbyZ0cXcKfdYFCvF4qSzfqc+zVa8ytpP2rFVQ1Lo0zrlrKUYa3yZ5ZnCGtB5NfYg9pulvcf4OVyacOOXyx9C6JxeFtlFY6Eq3Ktyj6rfqbuR+teKvy2Kv8AfMxanKlydeSb37MyaGIttmoTacXv2bysz6Xy4pfLUwWJuuvlGeo60tjimmns+O3f8i8Z2j100n8H5GidpplynVAASqAAAAABHfwLO6/AkI7+DZ3X4AZlq6OX51FJJMvWcOX51FOOSRwy228enOqe0xyuWw6zXae18Uqv34aWB4j5PyLxQwD6X9n9JfNGOmHP2oACVQAAAAAI7+DPuvwJCO/g2d1+AGXY/wBE+b8Ci4uW4u2e7Lm/BFWEkntOGW23D1RuuSJKs1JZndk0ziL/AFxIT+NPR+2x8n5GgZ2jn0r5PyNE746Y8/agAJVAAAAAAjv4FndfgSEd/As7rAyJ+5Ln5IqpZlp7am/j5IrROGW23j096jyPER0eR98qvdNHRz6d8n9JpGZo3jvk/pNM0Y6Yc/agAJVAAAAAA4u4M+6/A7OZx1oOPasgMWP9O8+zyRAk+xmnDCZVxjKubaSTyksnkevCL/HYv9kc7hbXfHlkjMyfYwk9bPJml7Gv7bf5ierCR667f+kR8Kt90R6N48uT+k0ytRh1XYpRzUVFrJ79uX2LJ0niM+V7vYACUAAAAAAAAAAAAAAAAAAAAAD/2Q==" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">idole</h5>
    <p class="card-text"> Idôle est le parfum des femmes conquérantes, audacieuses et inspirantes, qui vivent leurs rêves en grand.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style={{width: '300px', top:'-470px', left:'390px'}}>
  <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">la vie est belle</h5>
    <p class="card-text">L’eau de parfum Lancôme La Vie Est Belle est un symbole de liberté et de bonheur, un véritable hymne à la beauté de la vie</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style={{width: '300px', top:'-960px', left:'810px'}}>
  <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">lancome tresor</h5>
    <p class="card-text">Tresor Midnight Rose Lancome Eau De Parfum Felmme 30ml Trésor Midnight Rose, une fragrance gourmande comme une rose d'amour </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<h1>hgukuk</h1>


    </div>
  )
}
