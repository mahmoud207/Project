function toggleMenu(){
			const menuToggle = document.querySelector('.toggle');
			const navigation = document.querySelector('.navigation')
			const buttons = document.querySelector('.buttons')
			
			menuToggle.classList.toggle('active')
			navigation.classList.toggle('active')	
			buttons.classList.toggle('active')
}
