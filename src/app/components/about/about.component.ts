import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import * as THREE from 'three';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit, OnDestroy {
    @ViewChild('avatarCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    
    private characterGroup!: THREE.Group;
    private headGroup!: THREE.Group;
    private eyeGroup!: THREE.Group;
    
    private mouse = new THREE.Vector2();
    private targetRotation = new THREE.Vector2();
    private windowHalfX = window.innerWidth / 2;
    private windowHalfY = window.innerHeight / 2;
    private animationId: number = 0;

    ngAfterViewInit(): void {
        this.initThree();
        this.animate();
    }

    ngOnDestroy(): void {
        cancelAnimationFrame(this.animationId);
        if (this.renderer) {
            this.renderer.dispose();
        }
    }

    private initThree() {
        const canvas = this.canvasRef.nativeElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        // Scene
        this.scene = new THREE.Scene();
        
        // Camera
        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        this.camera.position.z = 6;
        this.camera.position.y = 0.5;

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: canvas, 
            alpha: true, 
            antialias: true 
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        this.scene.add(ambientLight);

        const mainLight = new THREE.DirectionalLight(0xffffff, 3);
        mainLight.position.set(5, 10, 7);
        this.scene.add(mainLight);

        const rimLight = new THREE.SpotLight(0x00f3ff, 10);
        rimLight.position.set(-5, 5, -5);
        rimLight.lookAt(0, 0, 0);
        this.scene.add(rimLight);

        const fillLight = new THREE.PointLight(0xbd00ff, 5);
        fillLight.position.set(5, -5, 5);
        this.scene.add(fillLight);

        // Character Group
        this.characterGroup = new THREE.Group();
        this.scene.add(this.characterGroup);

        // Materials
        const armorMat = new THREE.MeshStandardMaterial({
            color: 0x2b3a42,
            roughness: 0.2,
            metalness: 0.9,
            emissive: 0x001122,
            emissiveIntensity: 0.5
        });
        
        const detailMat = new THREE.MeshStandardMaterial({
            color: 0x1a1a1a,
            roughness: 0.5,
            metalness: 0.8,
        });

        const glowMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
        const accentMat = new THREE.MeshStandardMaterial({
            color: 0xbd00ff,
            roughness: 0.2,
            metalness: 0.8,
            emissive: 0xbd00ff,
            emissiveIntensity: 0.2
        });

        // --- BODY ---
        const bodyGeo = new THREE.CylinderGeometry(0.8, 1.2, 1.5, 8);
        const body = new THREE.Mesh(bodyGeo, armorMat);
        body.position.y = -1.5;
        this.characterGroup.add(body);

        // Chest Plate
        const chestGeo = new THREE.BoxGeometry(1.4, 0.8, 0.5);
        const chest = new THREE.Mesh(chestGeo, detailMat);
        chest.position.set(0, -1.2, 0.6);
        this.characterGroup.add(chest);

        // Chest Core (Glowing)
        const coreGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 16);
        const core = new THREE.Mesh(coreGeo, glowMat);
        core.rotation.x = Math.PI / 2;
        core.position.set(0, -1.2, 0.86);
        this.characterGroup.add(core);

        // --- HEAD GROUP ---
        this.headGroup = new THREE.Group();
        this.characterGroup.add(this.headGroup);

        // Neck
        const neckGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.5, 16);
        const neck = new THREE.Mesh(neckGeo, detailMat);
        neck.position.y = -0.5;
        this.headGroup.add(neck);

        // Main Head Shape
        const headGeo = new THREE.BoxGeometry(1.2, 1.4, 1.3);
        // Chamfer box manually or use a specific geometry, sticking to box for simplicity but adding details
        const head = new THREE.Mesh(headGeo, armorMat);
        this.headGroup.add(head);

        // Face Plate / Visor Area
        const faceGeo = new THREE.BoxGeometry(1.0, 0.8, 0.2);
        const face = new THREE.Mesh(faceGeo, detailMat);
        face.position.set(0, 0, 0.6);
        this.headGroup.add(face);

        // Ear/Antennae details
        const earGeo = new THREE.BoxGeometry(0.2, 0.8, 0.8);
        const leftEar = new THREE.Mesh(earGeo, accentMat);
        leftEar.position.set(-0.7, 0, 0);
        this.headGroup.add(leftEar);

        const rightEar = new THREE.Mesh(earGeo, accentMat);
        rightEar.position.set(0.7, 0, 0);
        this.headGroup.add(rightEar);

        // --- EYES ---
        this.eyeGroup = new THREE.Group();
        this.headGroup.add(this.eyeGroup);

        const eyeGeo = new THREE.SphereGeometry(0.12, 16, 16);
        
        const leftEye = new THREE.Mesh(eyeGeo, glowMat);
        leftEye.position.set(-0.25, 0.1, 0.7);
        this.eyeGroup.add(leftEye);

        const rightEye = new THREE.Mesh(eyeGeo, glowMat);
        rightEye.position.set(0.25, 0.1, 0.7);
        this.eyeGroup.add(rightEye);

        // Floating Halo/UI Ring
        const ringGeo = new THREE.TorusGeometry(1.2, 0.02, 16, 100);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.3 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = 0.8;
        this.headGroup.add(ring);
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        this.mouse.x = (event.clientX - this.windowHalfX);
        this.mouse.y = (event.clientY - this.windowHalfY);
    }

    private animate() {
        this.animationId = requestAnimationFrame(this.animate.bind(this));

        // Calculate target rotations based on mouse position
        // Limit the rotation angles
        const targetX = THREE.MathUtils.clamp(this.mouse.y * 0.001, -0.5, 0.5);
        const targetY = THREE.MathUtils.clamp(this.mouse.x * 0.001, -0.8, 0.8);

        // Smoothly interpolate current rotation to target
        this.targetRotation.x = targetX;
        this.targetRotation.y = targetY;

        // Head follows mouse
        this.headGroup.rotation.x += (this.targetRotation.x - this.headGroup.rotation.x) * 0.1;
        this.headGroup.rotation.y += (this.targetRotation.y - this.headGroup.rotation.y) * 0.1;

        // Eyes follow mouse slightly more (paralax effect)
        this.eyeGroup.position.x = this.targetRotation.y * 0.2;
        this.eyeGroup.position.y = -this.targetRotation.x * 0.2;

        // Body follows slightly for natural movement
        this.characterGroup.rotation.y += (this.targetRotation.y * 0.2 - this.characterGroup.rotation.y) * 0.05;

        // Idle "Breathing" animation
        const time = Date.now() * 0.002;
        this.headGroup.position.y = Math.sin(time) * 0.05;
        this.characterGroup.position.y = Math.sin(time + 1) * 0.02 - 0.5; // Offset to center vertically

        this.renderer.render(this.scene, this.camera);
    }
}
