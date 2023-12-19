import pygame
import sys
from pygame.locals import *
pygame.init()
screen = pygame.display.set_mode((960, 540))
screen.fill((255, 255, 255))
pygame.display.set_caption("Jogo")
running = True
font_title = pygame.font.Font(None, 50)
font_text = pygame.font.Font(None, 36)
clock = pygame.time.Clock()
image_path1 = r'/Users/gabrielcarneiro/Documents/GitHub/grupo4/src/games/img/logo_aladdin.png'
image1 = pygame.image.load(image_path1).convert()
image1 = pygame.transform.scale(image1, (550, 300))
image_rect1 = image1.get_rect(center=screen.get_rect().center)
image_path2 = r'/Users/gabrielcarneiro/Documents/GitHub/grupo4/src/games/img/Screen Shot 2023-12-18 at 18.33.20.png'
image2 = pygame.image.load(image_path2).convert()
image2 = pygame.transform.scale(image2, (550, 300))
image_rect2 = image2.get_rect(center=screen.get_rect().center)
image_path3 = r'/Users/gabrielcarneiro/Documents/GitHub/grupo4/src/games/img/Screen Shot 2023-11-29 at 20.35.22.png'
image3 = pygame.image.load(image_path3).convert()
image3 = pygame.transform.scale(image3, (550, 300))
image_rect3 = image3.get_rect(center=screen.get_rect().center)
while True:
    # Seu código Python continua aqui...

    for event in pygame.event.get():

        if event.type == pygame.QUIT:
            pygame.quit()
            exit()
        screen.blit(image1, image_rect1)        
        
        if event.type == pygame.KEYDOWN:
            if         event.key ==  pygame.K_UP                :
                screen.blit(image2, image_rect2)                

            else:
                screen.blit(image3, image_rect3)                

    pygame.display.update()
