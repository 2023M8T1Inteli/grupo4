import pygame
import sys
from pygame.locals import *

pygame.init()

# Configurações iniciais
screen = pygame.display.set_mode((960, 540))
screen.fill((255, 255, 255))
pygame.display.set_caption('Jogo 1')
running = True
font_title = pygame.font.Font(None, 50)
font_text = pygame.font.Font(None, 36)
clock = pygame.time.Clock()

# Carregar a imagem
# image_path = "img/IMG_1983.jpeg"  # Substitua pelo caminho correto da sua imagem
# image = pygame.image.load(image_path)
# image_rect = image.get_rect(center=screen.get_rect().center)
# image = pygame.transform.scale(image, (550,300))

# Texto inicial
text = font_title.render("Encontre essa cor no tapete", False, (0, 0, 0))
text_rect = text.get_rect(left=250, top=70)

# # Texto de acerto
title_acerto = font_title.render("Parabéns!", True, (0, 255, 0))  # Verde
title_acerto_rect = title_acerto.get_rect(left=400, top=140)

text_acerto = font_text.render("Você encontrou a cor correta!", True, (0, 255, 0))  # Verde
text_acerto_rect = text_acerto.get_rect(left=320, top=210)

# # Texto de erro
text_erro = font_title.render("Bela tentiva!!", True, (255, 0, 0))  # Vermelho
text_erro_rect = text_erro.get_rect(left=360, top=140)

text_try = font_text.render("Vamos tentar novamente?", True, (255, 0, 0))  # Vermelho
text_try_rect = text_erro.get_rect(left=320, top=210)

teste_img = pygame.Surface((550, 300))
teste_img.fill('Red')

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()    

        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP:
                screen.fill((255, 255, 255))
                screen.blit(title_acerto, title_acerto_rect)
                screen.blit(text_acerto, text_acerto_rect)


            else:
                screen.fill((255, 255, 255))
                screen.blit(text_erro, text_erro_rect)
                screen.blit(text_try, text_try_rect)

            pygame.display.flip()
            pygame.time.wait(2000)  # Espera 2 segundos antes de retornar à tela inicial
            screen.fill((255, 255, 255))
    screen.blit(teste_img,(205,185))
    screen.blit(text,text_rect)

    pygame.display.update()

