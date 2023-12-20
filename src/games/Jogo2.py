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
image_path1 = r'/Users/gabrielcarneiro/Documents/GitHub/grupo4/src/games/img/abelha.jpg'
image1 = pygame.image.load(image_path1).convert()
image1 = pygame.transform.scale(image1, (550, 300))
image_rect1 = image1.get_rect(center=screen.get_rect().center)
while True:
    # Seu código Python continua aqui...

    for event in pygame.event.get():

        if event.type == pygame.QUIT:
            pygame.quit()
            exit()
        screen.blit(image1, image_rect1)        

    pygame.display.update()
