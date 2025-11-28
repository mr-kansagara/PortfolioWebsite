import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import * as THREE from 'three';
import gsap from 'gsap';

@Component({
  selector: 'app-hero-scene',
  templateUrl: './hero-scene.component.html',
  styleUrls: ['./hero-scene.component.scss'],
  standalone: true
})
export class HeroSceneComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer') canvasContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private geometry!: THREE.IcosahedronGeometry;
  private material!: THREE.MeshBasicMaterial;
  private mesh!: THREE.Mesh;
  private particles!: THREE.Points;

  private mouseX = 0;
  private mouseY = 0;
  private targetX = 0;
  private targetY = 0;

  private windowHalfX = window.innerWidth / 2;
  private windowHalfY = window.innerHeight / 2;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initThree();
    this.animate();
  }

  ngOnDestroy(): void {
    // Cleanup
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  private initThree(): void {
    const container = this.canvasContainer.nativeElement;

    // Scene
    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color(0x0a0a0a); // Let CSS handle background

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(this.renderer.domElement);

    // Object (Icosahedron)
    this.geometry = new THREE.IcosahedronGeometry(2, 1);
    this.material = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      wireframe: true,
      transparent: true,
      opacity: 0.4
            

    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 0;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xbd00ff,
      transparent: true,
      opacity: 0.3,
      sizeAttenuation: true
    });

    this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particles);

    // Resize Handler
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));

    this.targetX = this.mouseX * 0.001;
    this.targetY = this.mouseY * 0.001;

    this.mesh.rotation.y += 0.005;
    this.mesh.rotation.x += 0.002;

    this.mesh.rotation.y += 0.5 * (this.targetX - this.mesh.rotation.y);
    this.mesh.rotation.x += 0.05 * (this.targetY - this.mesh.rotation.x);

    this.particles.rotation.y = -this.mouseX * 0.0002;
    this.particles.rotation.x = -this.mouseY * 0.0002;

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize(): void {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  @HostListener('document:mousemove', ['$event'])
  onDocumentMouseMove(event: MouseEvent) {
    this.mouseX = (event.clientX - this.windowHalfX);
    this.mouseY = (event.clientY - this.windowHalfY);
  }
}
